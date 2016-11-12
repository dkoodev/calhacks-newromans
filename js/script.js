var destination;
var start;

var index = Math.floor(Math.random() * 10);
var index_copy = index;
index = 'url(../pictures/' + index + '.jpg)';
document.body.style.backgroundImage = index;

var locations = ["E.g. Grand Canyon, United States"
, "E.g. Mykonos, Greece"
, "E.g. Mount Rinjani, Indonesia"
, "E.g. Bonneville Salt Flats, United States"
, "E.g. Aokigahara, Japan"
, "E.g. New York City, United States"
, "E.g. Anahola, United States"
, "E.g. Lake Sinclair, United States"
, "E.g. Alberta, Canada"
, "E.g. Tahoe, United States"]

var curr_loc = locations[index_copy];
document.getElementById('destinationInput').placeholder = curr_loc;


document.getElementById('destinationButton').addEventListener('click', function() {
	document.getElementById('destination').style.display = "none";
	destination = document.getElementById('destinationInput').value;
	document.getElementById('history').innerHTML = "Travelling to  " + destination;
	document.getElementById('start').style.display = "block";
});

document.getElementById('startButton').addEventListener('click', function() {
	document.getElementById('start').style.display = "none";
	start = document.getElementById('startInput').value;
	document.getElementById('history').innerHTML += ",  from " + start;
	document.getElementById('map').style.display = "block";
	
});

var map = "https://maps.googleapis.com/maps/api/staticmap?center=" + destination + "&zoom=5&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C" + start + "&markers=color:red%7Clabel:B%7C" + destination + "&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA"
var x = document.createElement("img");
x.setAttribute("src", map);
document.getElementById('map').appendChild(x);