// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	document.getElementById("next").disabled = true;
})

function toggle() {
	document.getElementById("next").disabled = false;
}
 
var allLocations = [
	{
	  name: "Costa Verde",
	  latitude: 32.870637,
	  longitude: -117.216731
	},
	{
	  name: "La Regencia",
	  latitude: 32.864531,
	  longitude: -117.224677
	}
];

var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("help");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]
// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
function geoFindMe() {
	var output = document.getElementById("out");
  
	if (!navigator.geolocation){
	  output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
	  return;
	}
  
	function success(position) {
	  var latitude  = position.coords.latitude;
	  var longitude = position.coords.longitude;
	  
	  output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

	}
  
	function error() {
	  output.innerHTML = "Unable to retrieve your location";
	}
  
	output.innerHTML = "<p>Locating…</p>";
  
	navigator.geolocation.getCurrentPosition(success, error);

	// findClosest();

	// function findClosest() {
	// 	console.log("hi");
	// 	var closest=allLocations[0];
	// 	var closest_distance=distance(closest, position.coords);
	// 	for(var i=1;i<allLocations.length;i++){
	// 	if(distance(allLocations[i],position.coords) < closest_distance){
	// 	  closest_distance=distance(allLocations[i],position.coords);
	// 	  closest=allLocations[i];
	// 		}
	// 	}
	// 	console.log('end');
	// 	output.innerHTML = '<p>You are closest to: ' + closest.name+ '</p>';
	// }

}

function distance(position1,position2){
	var lat1=position1.latitude;
	var lat2=position2.latitude;
	var lon1=position1.longitude;
	var lon2=position2.longitude;
	var R = 6371000; // metres
	var φ1 = lat1.toRadians();
	var φ2 = lat2.toRadians();
	var Δφ = (lat2-lat1).toRadians();
	var Δλ = (lon2-lon1).toRadians();

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
		Math.cos(φ1) * Math.cos(φ2) *
		Math.sin(Δλ/2) * Math.sin(Δλ/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c;
	return d;
}

// var radios = [].slice.call(document.querySelectorAll('input[name=gym]'));

// function reset() {
// 		document.getElementById('regencia').disabled = false;
// 		document.getElementById('regencia').checked = false;
// 		document.getElementById('costaverde').disabled = false;
// 		document.getElementById('costaverde').checked = false;
// 		document.getElementById('regents').disabled = false;
// 		document.getElementById('regents').checked = false;
// 		document.getElementById('rimac').disabled = false;
// 		document.getElementById('rimac').checked = false;
// 		document.getElementById('main').disabled = false;
// 		document.getElementById('main').checked = false;
// 		document.getElementById('crossroads').disabled = false;
// 		document.getElementById('crossroads').checked = false;
// 		document.getElementById('next').disabled = true;
// }

// radios.forEach(function(radio) {
// 		radio.addEventListener('change', function() { 
// 				radios.forEach(function(r) {
// 						r.disabled = r !== radio;
// 				});
// 		});
// });

function getLocation() {
	var e = document.getElementById("gymSelect");
    var gymLocation = e.options[e.selectedIndex].value;
	localStorage.setItem("location", gymLocation);
}

function show(obj) {
	var selectedGym = obj;
	var gym = selectedGym.options[selectedGym.selectedIndex].value;

	if (gym === 'La Regencia')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='col'><a href='https://www.google.com/maps/place/La+Regencia/@32.8642339,-117.2246874,15z/data=!4m5!3m4!1s0x0:0x81de7b628bfa0caf!8m2!3d32.8642339!4d-117.2246874' target='_blank'>"
		+ "<img src='../images/regencia.PNG' class='resize'>" + 
		"<p>7655 Palmilla Dr, San Diego, CA 92122</p></a></div>";
	else if (gym === 'Costa Verde')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><a href='https://www.google.com/maps/place/Costa+Verde+Village/@32.8701724,-117.2189884,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc072aee12ec53:0x8512794c97b65c28!8m2!3d32.8701724!4d-117.2167997' target='_blank'>"
		+ "<img src='../images/costaverde.PNG' class='resize'>" +
		"<p>8720 Costa Verde Blvd, San Diego, CA 92122</p></a></div>";
	else if (gym === 'Regents Court')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><a href='https://www.google.com/maps/place/Regents+Court+Apartments/@32.8672414,-117.2211595,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc00d56bbfbf1b:0xaef821ec09b36df0!8m2!3d32.8672414!4d-117.2189708' target='_blank'>" 
		+ "<img src='../images/regents.PNG' class='resize'>"+
		"<p>8465 Regents Rd, San Diego, CA 92122</p></a></div>";
	else if (gym === 'Rimac Gym')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><a href='https://www.google.com/maps/place/RIMAC+Arena/@32.8852757,-117.241371,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc06d869a3c4bd:0x5986425d4b318e9f!8m2!3d32.8852757!4d-117.2391823' target='_blank'>"
		+ "<img src='../images/rimac.PNG' class='resize'>" + 
		"<p>9730 Hopkins Dr, La Jolla, CA 92093</p></a></div>";
	else if (gym === 'Main Gym')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><a href='https://www.google.com/maps/place/Main+Gymnasium/@32.8771494,-117.2434366,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc06c71e5c3c8b:0x4d59a2c95e1ae459!8m2!3d32.8771494!4d-117.2412479' target='_blank'>"
		+ "<img src='../images/maingym.PNG' class='resize'>"+
		"<p>Scholars Ln, San Diego, CA 92161</p></a></div>";
	else if(gym === 'La Jolla Crossroads')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><a href='https://www.google.com/maps/place/La+Jolla+Crossroads/@32.8723297,-117.205461,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc07335344d327:0xfe8625cb17ad32b5!8m2!3d32.8723297!4d-117.2032723' target='_blank'>"
		+ "<img src='../images/crossroads.PNG' class='resize'>"+
		"<p>9085 Judicial Dr, San Diego, CA 92122</p></a></div>";



}