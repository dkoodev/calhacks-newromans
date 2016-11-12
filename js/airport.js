var destination_laditude = 1;
var destination_longitude = 1;
var depart_laditude = 1;
var depart_longitude = 1;
var destination_name;
var depart_name;

function createURL(addr){
	for (var i = 0; i < addr.length; i++) {
		if (addr[i] == " ") {
			addr[i] = "+";
		};
	};
	var x = "https://maps.googleapis.com/maps/api/geocode/json?address="+ addr +"&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA";
	console.log(x);
	httpGetAsync(x, processhttp);
}


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function processhttp(responseText){
	console.log(responseText);
	console.log(responseText.location);

}