var destination_latitude =0;
var destination_longitude =0;
var depart_latitude =0;
var depart_longitude=0;
var destination_name;
var depart_name;
var destination_airport;
var depart_airport;
var current;




// Testing cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
// setCookie("destination_latitude",0,10);
// setCookie("destination_longitude",0,10);
// setCookie("depart_latitude",0,10);
// setCookie("depart_longitude",0,10);



// document.getElementById('confirmationButton').addEventListener('click',function(){
// 	// setCookie("destination_latitude",destination_latitude,10);
// 	// setCookie("destination_longitude",destination_longitude,10);
// 	// setCookie("depart_latitude",depart_latitude,10);
// 	// setCookie("depart_longitude",depart_longitude,10);

// 	//   	document.getElementById('destination_latitude').value = destination_latitude;
// 	// document.getElementById('destination_longitude').value = destination_longitude;
// 	// document.getElementById('depart_latitude').value = depart_latitude;
// 	// document.getElementById('depart_longitude').value = depart_longitude;


// 	setTimeout( function(){} , 2000);
// });



//------------------------------------------------
function chk(){
	var name1=document.getElementById('destination_latitude').value;
	var name2=document.getElementById('destination_longitude').value;
	var name3=document.getElementById('depart_latitude').value;
	var name4=document.getElementById('depart_longitude').value;
	var dataString = 'destination_latitude=' + destination_latitude+'destination_longitude=' + destination_longitude +'depart_latitude=' + depart_latitude + 'depart_longitude=' + depart_longitude;
	$.ajax({
		type:"post",
		url: "hi.php",
		data: dataString,
		cache: false, 
		success: function(html){
			$('#msg').html(html);
		}
	})
	return false;
}


document.getElementById('confirmationButton').addEventListener('click',function(){
	console.log("confirmation button pressed");

	createURL(destination_name, 'destination');

  	createURL(depart_name,'depart');


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

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText,string);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
var x;

function processhttp(responseText,string){
	// console.log(responseText);
	x = JSON.parse(responseText);
	console.log(string);
	if (string == "destination") {
		destination_latitude = x.results[0].geometry.location.lat;
		destination_longitude = x.results[0].geometry.location.lng;
		savedata(string);
	}else{
		depart_latitude = x.results[0].geometry.location.lat;
		depart_longitude = x.results[0].geometry.location.lng;
		savedata(string);
	}
}

function savedata(string){
// 	console.log("enter savedata()");
	if(string == "destination"){
    	document.getElementById("destination_latitude").value = destination_latitude;
    	document.getElementById("destination_longitude").value = destination_longitude;
    	// submitdata();
    	       	form_submission();

	}else{
    	document.getElementById("depart_latitude").value = depart_latitude;
       	document.getElementById("depart_longitude").value = depart_longitude;
       	// submitdata();
       	       	form_submission();

	}
}

function form_submission(){

	$(document).ready(function(){
		$('#formsubmit').click(function(){
			$.post("index.php",
				{destination_latitude: $('#destination_latitude').val(), destination_longitude: $('#destination_longitude').val()
					,depart_latitude: $('#depart_latitude').val() , depart_longitude: $('#depart_longitude').val()},
				function(data){
					$('#response').html(data);
				}
			);
		});
	});
}

// function submitdata(){
// 	console.log("submitdata");

	// data: { "destination_latitude" : destination_latitude };
	// $(function(){
	//   $.ajax({
	//     type: "POST",
	//     url: 'index.php',
	//     data: ({"destination_latitude" : destination_latitude }),
	//     success: function(data) {
	//       // alert(data);
	//     }
	//   });
	// });
	// $(function(){
	// 	$.ajax({
	// 	     url: 'index.php', //This is the current doc
	// 	     type: "POST",
	// 	     dataType:'json', // add json datatype to get json
	// 	     data: ({"destination_latitude" : destination_latitude }),
	// 	     success: function(data){
	// 	         console.log(data);
	// 	     }
	// 	});  
	// });

	// console.log(document.getElementById('transfer'));
	// $('#transfer').submit(function(event)
	// {
	//   alert("abc");

	// });
	// document.getElementById('transfer').submit();
	// document.getElementById('transfer').on( "submit", handler )
// }


// function processairporthttp(airportinfo){
// 	console.log("processairporthttp reached");
// 	parsed_airport_info = JSON.parse(airportinfo);
// 	if(current == "destination"){
// 		destination_airport = parsed_airport_info.airports.code;
// 		console.log(destination_airport);
// 	}else{
// 		depart_airport = parsed_airport_info.airports.code;
// 		console.log(depart_airport);
// 	}

// }






