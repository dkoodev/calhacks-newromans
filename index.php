<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/google-maps.css">

		<title> Travelyze</title>
	</head>

	<body>
		<?php
			$command = escapeshellcmd('python py/functions.py');
			$output = shell_exec($command);
		?>
	<a href="."><img src="../pictures/icon.png" id="icon"></a>
	<a href="../pages/about.html" target="_blank"><img id="help" src="../pictures/help.png"></a>
	<div id="history"><br></div>
	<div id="destination">
		<div id="destinationPrompt">Where would you like to go?</div>
			<input type="text" id="destinationInput">
    		<div id="map"></div>
			<div id="destinationButton">Go</div>
		</div>
	<div id="start"><div id="startPrompt">Where are you starting from?</div><input type="text" id="startInput" placeholder="E.g. University of Southern California"><div id="startButton">Go</div></div>
    <div id="map"></div>
    <div id="confirmation"><div id="confirmationButton">Confirm</div></div>
    <div id="tester"> </div> 
    <footer>Travelyze &copy 2016 | Powered by <a href="https://developers.amadeus.com/">Amadeus</a>, <a href="https://developers.google.com/">Google</a>, and <a href="https://plot.ly/">Plotly</a></footer>
	</body>

<script src="js/plotly-latest.min.js"></script>
<script type="text/javascript" src="js/plot.js"></script>
<script type="text/javascript" src="js/script.js" ></script>
<script type="text/javascript" src="js/airport.js" ></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA&libraries=places&callback=initAutocomplete"async defer></script>
<script type="text/javascript" src="js/google-maps.js"></script>

</html>