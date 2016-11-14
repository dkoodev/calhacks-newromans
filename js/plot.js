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

document.getElementById('submit').addEventListener('click', function() {

    // window.setTimeout(function(){}, 2000);

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
            paper_bgcolor: "rgba(255,255,255,0.7)",
            plot_bgcolor: "rgba(255,255,255,0.3)",
            margin: {
                b: 30,
                l: 90,
                r: 60,
                t: 70
            }
        };

        Plotly.plot(document.getElementById('tester'), data, layout
             ,{displayModeBar: false});
        document.getElementById('loading_gif_place').style.display = "none";
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
