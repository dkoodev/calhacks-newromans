var destination;
var start;

var index = Math.floor(Math.random() * 10);
index = 'url(../pictures/' + index + '.jpg)';
document.body.style.backgroundImage = index;


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

