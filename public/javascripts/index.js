$(document).ready(function () {
    var timeData = [],
        xAxisAccData = [],
        yAxisAccData = [],
        zAxisAccData = [],
        xAxisMagData = [],
        yAxisMagData = [],
        zAxisMagData = [],
        xAxisRotData = [],
        yAxisRotData = [],
        zAxisRotData = [],

        objTemperatureData = [],
        ambTemperatureData = [],

        lightmeterData = [],

        barometerData = [],

        humidityData = [];


    var accData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: xAxisAccData
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
                data: yAxisAccData
            },
            {
                fill: false,
                label: 'Z-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: zAxisAccData
            }
        ]
    }

    var magData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: xAxisMagData
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
                data: yAxisMagData
            },
            {
                fill: false,
                label: 'Z-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: zAxisMagData
            }
        ]
    }

    var rotData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: xAxisRotData
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
                data: yAxisRotData
            },
            {
                fill: false,
                label: 'Z-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(24, 120, 240, 1)",
                pointBoarderColor: "rgba(24, 120, 240, 1)",
                backgroundColor: "rgba(24, 120, 240, 0.4)",
                pointHoverBackgroundColor: "rgba(24, 120, 240, 1)",
                pointHoverBorderColor: "rgba(24, 120, 240, 1)",
                data: zAxisRotData
            }
        ]
    }

    var temData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'Ambience',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: objTemperatureData
            },
            {
                fill: false,
                label: 'Object',
                yAxisID: 'yAxis',
                borderColor: "rgba(219, 50, 54, 1)",
                pointBoarderColor: "rgba(219, 50, 54, 1)",
                backgroundColor: "rgba(219, 50, 54, 0.4)",
                pointHoverBackgroundColor: "rgba(219, 50, 54, 1)",
                pointHoverBorderColor: "rgba(219, 50, 54, 1)",
                data: ambTemperatureData
            },
        ]
    }

    var preData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: barometerData
            },
        ]
    }

    var humData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: humidityData
            },
        ]
    }

    var lightData = {
        labels: timeData,
        datasets: [
            {
                fill: false,
                label: 'X-Axis',
                yAxisID: 'yAxis',
                borderColor: "rgba(255, 204, 0, 1)",
                pointBoarderColor: "rgba(255, 204, 0, 1)",
                backgroundColor: "rgba(255, 204, 0, 0.4)",
                pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
                pointHoverBorderColor: "rgba(255, 204, 0, 1)",
                data: lightmeterData
            },
        ]
    }

    var OptionWithLabels = {
        responsive: true,
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                id: 'yAxis',
                type: 'linear',
                scaleLabel: {
                    labelString: 'g',
                    display: true
                },
                position: 'right',
            }]
        }
    }

    var OptionWithoutLabels = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                id: 'yAxis',
                type: 'linear',
                scaleLabel: {
                    labelString: 'g',
                    display: true
                },
                position: 'right',
            }]
        }
    }

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("accChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var accLineChart = new Chart(ctx, {
        type: 'line',
        data: accData,
        options: OptionWithLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("magChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var magLineChart = new Chart(ctx, {
        type: 'line',
        data: magData,
        options: OptionWithLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("rotChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var rotLineChart = new Chart(ctx, {
        type: 'line',
        data: rotData,
        options: OptionWithLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("temChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var temLineChart = new Chart(ctx, {
        type: 'line',
        data: temData,
        options: OptionWithLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("preChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var preLineChart = new Chart(ctx, {
        type: 'line',
        data: preData,
        options: OptionWithoutLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("humChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var humLineChart = new Chart(ctx, {
        type: 'line',
        data: humData,
        options: OptionWithoutLabels
    });

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("lightChart").getContext("2d");
    var optionsNoAnimation = { animation: false }
    var lightLineChart = new Chart(ctx, {
        type: 'line',
        data: lightData,
        options: OptionWithoutLabels
    });

    var ws = new WebSocket('wss://' + location.host);
    ws.onopen = function () {
        console.log('Successfully connect WebSocket');
    }

    ws.onmessage = function (message) {
        console.log('receive message' + message.data);
        try {
            var obj = JSON.parse(message.data);
            if (!obj.time || !obj.accelerometer[0]) {
                return;
            }
            // only keep no more than 15 points in the line chart
            const maxLen = 15;

            timeData.push(obj.time);

            xAxisAccData.push(obj.accelerometer[0]);
            xAxisMagData.push(obj.magnetometer[0]);
            xAxisRotData.push(obj.gyroscope[0]);
            objTemperatureData.push(obj.IRtemperature[0]);
            lightmeterData.push(obj.lightmeter);
            
            


            var len = timeData.length;
            if (len > maxLen) {
                timeData.shift();
                xAxisAccData.shift();
                xAxisMagData.shift();
                xAxisRotData.shift();
                objTemperatureData.shift();
                lightmeterData.shift();

            }

            if (obj.yAxisAcc) {
                yAxisAccData.push(obj.accelerometer[1]);
                yAxisMagData.push(obj.magnetometer[1]);
                yAxisRotData.push(obj.gyroscope[1]);
                ambTemperatureData.push(obj.IRtemperature[1]);
                barometerData.push(obj.barometer[1]);
                humidityData.push(obj.humidity[1]);

            }
            if (yAxisAccData.length > maxLen) {
                yAxisAccData.shift();
                yAxisMagData.shift();
                yAxisRotData.shift();
                ambTemperatureData.shift();
                barometerData.shift();
                humidityData.shift();
            }

            if (obj.zAxisAcc) {
                zAxisAccData.push(obj.accelerometer[2]);
                zAxisMagData.push(obj.magnetometer[2]);
                zAxisRotData.push(obj.gyroscope[2]);
            }
            if (zAxisAccData.length > maxLen) {
                zAxisAccData.shift();
                zAxisMagData.shift();
                zAxisRotData.shift();
            }

            accLineChart.update();
            magLineChart.update();
            rotLineChart.update();
            temLineChart.update();
            preLineChart.update();
            humLineChart.update();
            lightLineChart.update();

        } catch (err) {
            console.error(err);
        }
    }

})