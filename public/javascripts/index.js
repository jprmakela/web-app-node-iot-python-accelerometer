$(document).ready(function () {
    var timeData = [],
        xAxisAccArray = [],
        yAxisAccArray = [],
        zAxisAccArray = [],
        xAxisMagArray = [],
        yAxisMagArray = [],
        zAxisMagArray = [],
        xAxisRotArray = [],
        yAxisRotArray = [],
        zAxisRotArray = [],

        objTemperatureArray = [],
        ambTemperatureArray = [],

        lightmeterArray = [],

        barometerArray = [],

        humidityArray = [];


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
                data: xAxisAccArray
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
                data: yAxisAccArray
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
                data: zAxisAccArray
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
                data: xAxisMagArray
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
                data: yAxisMagArray
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
                data: zAxisMagArray
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
                data: xAxisRotArray
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
                data: yAxisRotArray
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
                data: zAxisRotArray
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
                data: objTemperatureArray
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
                data: ambTemperatureArray
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
                data: barometerArray
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
                data: humidityArray
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
                data: lightmeterArray
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

            xAxisAccArray.push(obj.accelerometer[0]);
            xAxisMagArray.push(obj.magnetometer[0]);
            xAxisRotArray.push(obj.gyroscope[0]);
            objTemperatureArray.push(obj.IRtemperature[0]);
            lightmeterArray.push(obj.lightmeter);
            
            var len = timeData.length;
            if (len > maxLen) {
                timeData.shift();
                xAxisAccArray.shift();
                xAxisMagArray.shift();
                xAxisRotArray.shift();
                objTemperatureArray.shift();
                lightmeterArray.shift();

            }

            if (obj.accelerometer[1]) {
                yAxisAccArray.push(obj.accelerometer[1]);
                yAxisMagArray.push(obj.magnetometer[1]);
                yAxisRotArray.push(obj.gyroscope[1]);
                ambTemperatureArray.push(obj.IRtemperature[1]);
                barometerArray.push(obj.barometer[1]);
                humidityArray.push(obj.humidity[1]);

            }
            if (yAxisAccArray.length > maxLen) {
                yAxisAccArray.shift();
                yAxisMagArray.shift();
                yAxisRotArray.shift();
                ambTemperatureArray.shift();
                barometerArray.shift();
                humidityArray.shift();
            }

            if (obj.accelerometer[2]) {
                zAxisAccArray.push(obj.accelerometer[2]);
                zAxisMagArray.push(obj.magnetometer[2]);
                zAxisRotArray.push(obj.gyroscope[2]);
            }
            if (zAxisAccArray.length > maxLen) {
                zAxisAccArray.shift();
                zAxisMagArray.shift();
                zAxisRotArray.shift();
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