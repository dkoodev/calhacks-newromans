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
	<a href="."><img src="../pictures/iconFull.png" id="icon"></a>
	<a href="../pages/about.html" target="_blank"><img id="help" src="../pictures/iconAbout.png"></a>
	<div id="history"><br></div>
	<div id="switchButtonLeft"><img src="../pictures/arrowLeft.png"></div>
	<div id="switchButtonRight"><img src="../pictures/arrowRight.png"></div>
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
	<form id="transfer" name="transfer" method="post">
    	<input id="destination_lat_input" name="destination_lat_input"></input>
    	<input id="destination_lng_input" name="destination_lng_input"></input>
    	<input id="depart_lat_input" name="depart_lat_input"></input>
    	<input id="depart_lng_input" name="depart_lng_input"></input>
		<input name="submit" type="submit" >

	</form>

<?php
	
	
 	// $sql="SELECT * FROM <tablename> where color='".$userAnswer."'" ;
 	// $result=mysql_query($sql);
 	// $row=mysql_fetch_array($result);
 	// for first row only and suppose table having data
 	// echo json_encode($row);  // pass array in json_encode  


	if(isset($_POST['destination_laditude']))
	{
	    $uid = $_POST['destination_laditude'];
	    echo "<h>". $uid ."</h>";
	    // Do whatever you want with the $uid
	}

?>
<script src="js/jquery-3.1.1.js"></script>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script> -->
<script src="js/plotly-latest.min.js"></script>
<script type="text/javascript" src="js/plot.js"></script>
<script type="text/javascript" src="js/script.js" ></script>
<script type="text/javascript" src="js/airport.js" ></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA&libraries=places&callback=initAutocomplete"async defer></script>
<script type="text/javascript" src="js/google-maps.js"></script>

</html>