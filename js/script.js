var destination;
var start;


var index = Math.floor(Math.random() * 18);
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
, "E.g. Shawnee Mountain, United States"
, "E.g. La Fortuna, Costa Rica"
, "E.g. Desert Safari, Dubai"
, "E.g. Taipei, Taiwan"
, "E.g. Mexico Beach, United States"
, "E.g. Trier, Germany"
, "E.g. Halsingland, Sweden"
, "E.g. Yosemite, United States"
, "E.g. Jarrettsville, United States"]

var curr_loc = locations[index_copy];
document.getElementById('destinationInput').placeholder = curr_loc;


document.getElementById('destinationButton').addEventListener('click', function() {
	document.getElementById('destination').style.display = "none";
	destination = document.getElementById('destinationInput').value;
	document.getElementById('history').innerHTML = "Travelling to  " + destination;
	document.getElementById('start').style.display = "block";
});


document.getElementById('switchButtonLeft').addEventListener('click', function() {
	if(index_copy == 0) {
		index_copy = 17;
	}
	else {
		index_copy--;
	}
	index = 'url(../pictures/' + index_copy + '.jpg)';
	document.body.style.backgroundImage = index;
	var curr_loc = locations[index_copy];
	document.getElementById('destinationInput').placeholder = curr_loc;
});

document.getElementById('switchButtonRight').addEventListener('click', function() {
	if(index_copy == 17) {
		index_copy = 0;
	}
	else {
		index_copy++;
	}
	index = 'url(../pictures/' + index_copy + '.jpg)';
	document.body.style.backgroundImage = index;
	var curr_loc = locations[index_copy];
	document.getElementById('destinationInput').placeholder = curr_loc;
});


document.getElementById('startButton').addEventListener('click', function() {
	document.getElementById('start').style.display = "none";
	start = document.getElementById('startInput').value;
	document.getElementById('history').innerHTML += ",  from " + start;
	document.getElementById('confirmation').style.display = "block";
	document.getElementById('confirmationButton').style.display = "block";
	document.getElementById('image').style.display = "block";
	var map = "https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=roadmap&markers=color:red|label:A|" + start + "&markers=color:yellow|label:B|" + destination + "&key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA";
	var x = document.createElement("img");
	x.setAttribute("src", map);
	x.setAttribute("id","image_id");
	x.setAttribute("align","middle");
	document.getElementById('image').appendChild(x);	
	

});

document.getElementById('confirmationButton').addEventListener('click', function() {
	document.getElementById('confirmation').style.display = "none";
	document.getElementById('submit').style.display = "block";

});

document.getElementById('submit').addEventListener('click', function() {
	document.getElementById('submit').style.display = "none";
});