$(document).ready(function () {
  var timeData = [],
    xAxisData = [],
    yAxisData = [],
    zAxisData = [];
  var data = {
    labels: timeData,
    datasets: [
      {
        fill: false,
        label: 'X-Axis',
        yAxisID: 'xAxis',
        borderColor: "rgba(255, 204, 0, 1)",
        pointBoarderColor: "rgba(255, 204, 0, 1)",
        backgroundColor: "rgba(255, 204, 0, 0.4)",
        pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
        pointHoverBorderColor: "rgba(255, 204, 0, 1)",
        data: xAxisData
      },
            {
        fill: false,
        label: 'Y-Axis',
        yAxisID: 'yAxis',
        borderColor: "rgba(219, 50, 54, 1)",
        pointBoarderColor: "rgba(219, 50, 54, 1)",
        backgroundColor: "rgba(219, 50, 54, 0.4)",
        pointHoverBackgroundColor: "rgba(219, 50, 54, 1)",
        pointHoverBorderColor: "rgba(219, 50, 54, 1)",
        data: yAxisData
      },
      {
        fill: false,
        label: 'Z-Axis',
        yAxisID: 'zAxis',
        borderColor: "rgba(24, 120, 240, 1)",
        pointBoarderColor: "rgba(24, 120, 240, 1)",
        backgroundColor: "rgba(24, 120, 240, 0.4)",
        pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
        pointHoverBorderColor: "rgba(24, 120, 240, 1)",
        data: zAxisData
      }
    ]
  }

  var basicOption = {
    title: {
      display: true,
      text: 'Fab Lab Accelerometer',
      fontSize: 36
    },
    scales: {
      yAxes: [{
        id: 'xAxis',
        type: 'linear',
        scaleLabel: {
          labelString: 'g',
          display: true
        },
        position: 'left',
      }, {
        id: 'yAxis',
        type: 'linear',
        scaleLabel: {
          labelString: 'g',
          display: true
        },
        position: 'left',
      }, {
        id: 'zAxis',
        type: 'linear',
        scaleLabel: {
          labelString: 'g',
          display: true
        },
        position: 'right'
      }]
    }
  }

  //Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");
  var optionsNoAnimation = { animation: false }
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: basicOption
  });

  var ws = new WebSocket('wss://' + location.host);
  ws.onopen = function () {
    console.log('Successfully connect WebSocket');
  }
  ws.onmessage = function (message) {
    console.log('receive message' + message.data);
    try {
      var obj = JSON.parse(message.data);
      if (!obj.time || !obj.xAxis) {
        return;
      }
      // only keep no more than 50 points in the line chart
      const maxLen = 50;

      timeData.push(obj.time);

      xAxisData.push(obj.xAxis);
      var len = timeData.length;
      if (len > maxLen) {
        timeData.shift();
        xAxisData.shift();
      }

      if (obj.yAxis) {
        yAxisData.push(obj.yAxis);
      }
      if (yAxisData.length > maxLen) {
        yAxisData.shift();
      }

      if (obj.zAxis) {
        zAxisData.push(obj.zAxis);
      }
      if (zAxisData.length > maxLen) {
        zAxisData.shift();
      }

      myLineChart.update();
    } catch (err) {
      console.error(err);
    }
  }
});
