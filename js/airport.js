var destination_laditude =1;
var destination_longitude =1;
var depart_laditude =2;
var depart_longitude=2;
var destination_name;
var depart_name;
var destination_airport;
var depart_airport;
var current;
	
document.getElementById('confirmationButton').addEventListener('click',function(){
	console.log("confirmation button pressed");
	createURL(destination_name, 'destination');

  	// createURL(depart_name,'depart');
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
		  document.write(' <?php php_function(); ?> ');
		  initialize();
		
		// url_destination_airport = "https://airport.api.aero/airport/nearest/"+ destination_laditude +"/"+ destination_longitude +"?user_key=45b3bb10d31577c7893b56a0eeb007fe";
		// console.log("right before windoww change");
		// window.location.href = "index.php?w1=" + url_destination_airport;

	}else{
		depart_laditude = x.results[0].geometry.location.lat;
		depart_longitude = x.results[0].geometry.location.lng;
		// url_depart_airport = "https://airport.api.aero/airport/nearest/"+depart_laditude+"/"+depart_longitude+"?user_key=45b3bb10d31577c7893b56a0eeb007fe";
		// httpGetAsync(url_depart_airport,processairporthttp,"depart");

	}
}




function processairporthttp(airportinfo){
	console.log("processairporthttp reached");
	parsed_airport_info = JSON.parse(airportinfo);
	if(current == "destination"){
		destination_airport = parsed_airport_info.airports.code;
		console.log(destination_airport);
	}else{
		depart_airport = parsed_airport_info.airports.code;
		console.log(depart_airport);
	}

}

var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(destination_laditude,destination_longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    types: ['airport']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(results[i]);
    }
  }
}

// var map;
// var service;
// var infowindow;

// function initialize_destination() {
// 	console.log("initialize_destination");
// 	console.log(destination_laditude);
// 	console.log(destination_longitude);

// 	google_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +destination_laditude + "," + destination_longitude + "&radius=500&type=airport&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA"
  	

// 	 httpGetAsync(google_url, process_google_url, 'destination');


//   // var place = new google.maps.LatLng(destination_laditude,destination_longitude);

//   // map = new google.maps.Map(document.getElementById('map'), {
//   //           center: place,
//   //           zoom: 15
//   //         });

//   // infowindow = new google.maps.InfoWindow();
//   // var service = new google.maps.places.PlacesService(map);
//   // service.nearbySearch({
//   //   location: place,
//   //   radius: 500,
//   //   type: ['airport']
//   // }, callback);

// }
// function process_google_url(placeinfo){
// 	console.log(placeinfo);
// }


// function callback(results, status) {
// 	// console.log("callback reached");
//  //      var airport_location = results[1];
//  //      console.log(airport_location);
//  //  if (status == google.maps.places.PlacesServiceStatus.OK) {
//  //      var airport_location = results[0];
//  //      console.log(airport_location);
//  //    }
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         console.log(results[i]);
//       }
//     }
// }






