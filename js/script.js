var destination;
var start;


var index = Math.floor(Math.random() * 10);
var index_copy = index;
index = 'url(../pictures/' + index + '.jpg)';
document.body.style.backgroundImage = index;

var locations = ["E.g. Grand Canyon, United States"
, "E.g. Mykonos, Greece"
, "E.g. Carlsbad Ranch, United States"
, "E.g. Bonneville Salt Flats, United States"
, "E.g. Aokigahara, Japan"
, "E.g. New York City, United States"
, "E.g. Anahola, United States"
, "E.g. Glacier National Park, United States"
, "E.g. Alberta, Canada"
, "E.g. Shawnee Mountain, United States"]

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
	document.getElementById('confirmation').style.display = "block";
	var map = "https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=roadmap&markers=color:red|label:A|" + start + "&markers=color:yellow|label:B|" + destination + "&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA";
	var x = document.createElement("img");
	x.setAttribute("src", map);
	document.getElementById('confirmation').appendChild(x);	
});

document.getElementById('confirmationButton').addEventListener('click', function() {
	document.getElementById('confirmation').style.display = "none";
});