var rawDataURL = '../resources/output.csv';
var xField = 'Departure Date';
var yField = 'Price';
var extrainfo = 'Airline';

var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1 Month'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6 Month'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1 Year'
    }, {
        step: 'all',
    }],
};

document.getElementById('confirmationButton').addEventListener('click', function() {
    Plotly.d3.csv(rawDataURL, function(err, rawData) {
        if(err) throw err;

        var data = prepData(rawData);
        var layout = {
            xaxis: {
                rangeselector: selectorOptions,
                rangeslider: {}
            },
            yaxis: {
                title: 'Price',
                fixedrange: true
            },
            //paper_bgcolor: "rgb(0,0,0,0.5)",
            //plot_bgcolor: "rgb(0,0,0,0.5)"
        };

        Plotly.plot(document.getElementById('tester'), data, layout);
    });

});


function prepData(rawData) {
    var x = [];
    var y = [];
    var info = [];

    //console.log(rawData.length)

    rawData.forEach(function(datum, i) {
        //if(i % 100) return;

        x.push(new Date(datum[xField]));
        y.push(datum[yField]);
        info.push(datum[extrainfo]);
    });

    return [{
        text: info,
        hoverinfo: "x+y+text",
        mode: 'lines',
        x: x,
        y: y
    }];
}
