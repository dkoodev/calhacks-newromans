<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/google-maps.css">

		<title> Travelyze</title>
	</head>

	<body>

	<a href="."><img src="../pictures/iconFull.png" id="icon"></a>
	<a href="../pages/about.html"><img id="help" src="../pictures/iconAbout.png"></a>
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
	<div id="confirmation"><div id="confirmationButton">Confirm</div></div>
    <div id="map"></div>
    <div id="tester"> </div> 
    <footer>Travelyze &copy 2016 | Powered by <a href="https://developers.amadeus.com/">Amadeus</a>, <a href="https://developers.google.com/">Google</a>, and <a href="https://plot.ly/">Plotly</a></footer>
	</body>	

	<form>
		<input id = "destination_latitude"> </input>
		<input id = "destination_longitude"> </input>
		<input id = "depart_latitude"> </input>
		<input id = "depart_longitude"> </input>
		<input id = "submit" type="submit" value="Click here to see flight price information!" onclick="return chk()"> </input>

	</form>
	<p id="msg"> </p>

<?php
	
	// $key = "<script type=text/javascript> document.write(destination_laditude) </script>";
	// echo "<h>". $key ."</h>"; 
 	// $sql="SELECT * FROM <tablename> where color='".$userAnswer."'" ;
 	// $result=mysql_query($sql);
 	// $row=mysql_fetch_array($result);
 	// for first row only and suppose table having data
 	// echo json_encode($row);  // pass array in json_encode  
		


	  // function get_value() {
		// echo $_COOKIE["destination_laditude"];
		// echo $_COOKIE["destination_longitude"];
		// echo $_COOKIE["depart_laditude"];
		// echo $_COOKIE["depart_longitude"];

		$destination_latitude = $_POST['destination_latitude'];
		$destination_longitude = $_POST['destination_longitude'];
		$depart_latitude = $_POST['depart_latitude'];
		$depart_longitude = $_POST['depart_longitude'];

		echo $destination_latitude;
		echo $destination_longitude;
		echo $depart_latitude;
		echo $depart_longitude;
	  // }




	  // if (isset($_GET['hello'])) {
	  // 	sleep(5);
	  //   get_value();
	  // }

	    // $destination_lat_input = $_POST['destination_lat_input'];
	    
	    // $destination_lng_input = $_POST['destination_lng_input'];

	    // $depart_lat_input = $_POST['depart_lat_input'];

	    // $depart_lng_input = $_POST['depart_lng_input'];

	    // echo "<h>". $destination_lat_input.  $destination_lng_input . $depart_lat_input . $depart_lng_input  ."</h>";
	    // Do whatever you want with the $uid

	    // $data = array($destination_lat_input, $destination_lng_input, $depart_lat_input, $depart_lng_input);
	    // $result = shell_exec('python py/maps.py ' . escapeshellarg(json_encode($data)));
	    // $resultData = json_decode($result, true);
	  	// var_dump($resultData);
	    // echo "<h>" .$resultData."</h>";

	    // $result = shell_exec('python py/functions.py' . escapeshellarg(json_encode($resultData)));
	    // // $resultData = json_decode($result, true);
	    // echo "<h>" .$result."</h>";


?>
<script src="js/jquery-3.1.1.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script src="js/plotly-latest.min.js"></script>
<script type="text/javascript" src="js/plot.js"></script>
<script type="text/javascript" src="js/script.js" ></script>
<script type="text/javascript" src="js/airport.js" ></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaopJNj_frN6fwXANNEKsK6LByLqdaZIA&libraries=places&callback=initAutocomplete"async defer></script>
<script type="text/javascript" src="js/google-maps.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.1.1.min.js"></script>


</html>

