function initialize() {

var input = document.getElementById('destinationInput');
var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'destinationInput', initialize);

initialize();