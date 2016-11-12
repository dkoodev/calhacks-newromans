var rawDataURL = '../resources/output.csv';
var xField = 'Departure Date';
var yField = 'Price';

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
        label: '1 year'
    }, {
        step: 'all',
    }],
};

document.getElementById('startButton').addEventListener('click', function() {
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
            }
        };

        Plotly.plot(document.getElementById('tester'), data, layout);
    });

});


function prepData(rawData) {
    var x = [];
    var y = [];

    rawData.forEach(function(datum, i) {

        x.push(new Date(datum[xField]));
        y.push(datum[yField]);
    });

    return [{
        mode: 'lines',
        x: x,
        y: y
    }];
}