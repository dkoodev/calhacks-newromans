var destination_laditude =0;
var destination_longitude =0;
var depart_laditude =0;
var depart_longitude=0;
var destination_name;
var depart_name;
var destination_airport;
var depart_airport;
var current;
	
document.getElementById('confirmationButton').addEventListener('click',function(){
	console.log("confirmation button pressed");
	createURL(destination_name, 'destination');
  	createURL(depart_name,'depart');
})

function createURL(addr,str){
	for (var i = 0; i < addr.length; i++) {
		if (addr[i] == " ") {
			addr[i] = "+";
		};
	};
	var x = "https://maps.googleapis.com/maps/api/geocode/json?address="+ addr +"&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA";
	httpGetAsync(x, processhttp, str);
}


function httpGetAsync(theUrl, callback, string)
{
	current = string;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
var x;

function processhttp(responseText){
	// console.log(responseText);
	x = JSON.parse(responseText);
	console.log(current);
	if (current == "destination") {
		destination_laditude = x.results[0].geometry.location.lat;
		destination_longitude = x.results[0].geometry.location.lng;
		savedata();
	}else{
		depart_laditude = x.results[0].geometry.location.lat;
		depart_longitude = x.results[0].geometry.location.lng;

	}
}

function savedata(){
	console.log("enter savedata()");
	if(current == "destination"){
    	document.getElementById("destination_lat_input").value = destination_laditude;
    	document.getElementById("destination_lng_input").value = destination_longitude;
    	submitdata();
	}else{
    	document.getElementById("depart_lat_input").value = depart_laditude;
       	document.getElementById("depart_lng_input").value = depart_longitude;
       	submitdata();
	}
}

function submitdata(){
	console.log("submitdata");

	// data: { "destination_laditude" : destination_laditude };
	// $(function(){
	//   $.ajax({
	//     type: "POST",
	//     url: 'index.php',
	//     data: ({"destination_laditude" : destination_laditude }),
	//     success: function(data) {
	//       // alert(data);
	//     }
	//   });
	// });
	$(function(){
		$.ajax({
		     url: 'index.php', //This is the current doc
		     type: "POST",
		     dataType:'json', // add json datatype to get json
		     data: ({"destination_laditude" : destination_laditude }),
		     success: function(data){
		         console.log(data);
		     }
		});  
	});

	// console.log(document.getElementById('transfer'));
	// $('#transfer').submit(function(event)
	// {
	//   alert("abc");

	// });
	// document.getElementById('transfer').submit();
	// document.getElementById('transfer').on( "submit", handler )
}


// function processairporthttp(airportinfo){
// 	console.log("processairporthttp reached");
// 	parsed_airport_info = JSON.parse(airportinfo);
// 	if(current == "destination"){
// 		destination_airport = parsed_airport_info.airports.code;
// 		console.log(destination_airport);
// 	}else{
// 		depart_airport = parsed_airport_info.airports.code;
// 		console.log(depart_airport);
// 	}

// }






