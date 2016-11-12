var destination;
var start;

document.getElementById('destinationButton').addEventListener('click', function() {
	document.getElementById('destination').style.display = "none";
	destination = document.getElementById('destinationInput').value;
	document.getElementById('history').innerHTML = destination;
	document.getElementById('start').style.display = "block";
});

document.getElementById('startButton').addEventListener('click', function() {
	document.getElementById('start').style.display = "none";
	start = document.getElementById('startInput').value;
	document.getElementById('history').innerHTML = start;
});