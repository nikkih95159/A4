// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	document.getElementById("next").disabled = true;
})

// function toggle() {
// 	document.getElementById("next").disabled = false;
// }
 
$('.popover-dismiss').popover({
	trigger: 'focus'
  })

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

function getLocation() {
	var e = document.getElementById("gymSelect");
    var gymLocation = e.options[e.selectedIndex].value;
	localStorage.setItem("location", gymLocation);
}

function show(obj) {
	document.getElementById("next").disabled = false;
	var selectedGym = obj;
	var gym = selectedGym.options[selectedGym.selectedIndex].value;

	if (gym === 'La Regencia')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/La+Regencia/@32.8642339,-117.2246874,15z/data=!4m5!3m4!1s0x0:0x81de7b628bfa0caf!8m2!3d32.8642339!4d-117.2246874' target='_blank'>"
		+ "<img src='../images/regencia.PNG' class='resize'>" + 
		"<p>7655 Palmilla Dr, San Diego, CA 92122</p></a></div>" + 
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 7AM - 10PM<br>Monday: 5AM - 10PM<br>Tuesday: 5AM - 10PM<br>Wednesday: 5AM - 10PM<br>" +
		"Thursday: 5AM - 10PM<br>Friday: 5AM - 10PM<br>Saturday: 7AM - 10PM</p><p>Phone: (888) 718-2317</p></div></div></div>";
	else if (gym === 'Costa Verde')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/Costa+Verde+Village/@32.8701724,-117.2189884,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc072aee12ec53:0x8512794c97b65c28!8m2!3d32.8701724!4d-117.2167997' target='_blank'>"
		+ "<img src='../images/costaverde.PNG' class='resize'>" +
		"<p>8720 Costa Verde Blvd, San Diego, CA 92122</p></a></div>" + 
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 9AM - 8PM<br>Monday: 5AM - 10PM<br>Tuesday: 5AM - 10PM<br>Wednesday: 5AM - 10PM<br>" +
		"Thursday: 5AM - 10PM<br>Friday: 5AM - 8PM<br>Saturday: 5AM - 8PM</p><p>Phone: (858) 264-3997</p></div></div></div>";
	else if (gym === 'Regents Court')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/Regents+Court+Apartments/@32.8672414,-117.2211595,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc00d56bbfbf1b:0xaef821ec09b36df0!8m2!3d32.8672414!4d-117.2189708' target='_blank'>" 
		+ "<img src='../images/regents.PNG' class='resize'>"+
		"<p>8465 Regents Rd, San Diego, CA 92122</p></a></div>" + 
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 24 Hours<br>Monday: 24 Hours<br>Tuesday: 24 Hours<br>Wednesday: 24 Hours<br>" +
		"Thursday: 24 Hours<br>Friday: 24 Hours<br>Saturday: 24 Hours</p><p>Phone: (858) 678-0550</p></div></div></div>";
	else if (gym === 'Rimac Gym')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/RIMAC+Arena/@32.8852757,-117.241371,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc06d869a3c4bd:0x5986425d4b318e9f!8m2!3d32.8852757!4d-117.2391823' target='_blank'>"
		+ "<img src='../images/rimac.PNG' class='resize'>" + 
		"<p>9730 Hopkins Dr, La Jolla, CA 92093</p></a></div>" + 
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 9:30AM - 1AM<br>Monday: 5:30AM - 1AM<br>Tuesday: 5:30AM - 1AM<br>Wednesday: 5:30AM - 1AM<br>" +
		"Thursday: 5:30AM - 1AM<br>Friday: 5:30AM - 11PM<br>Saturday: 7:30AM - 10PM</p><p>Phone: (858) 534-4037</p></div></div></div>";
	else if (gym === 'Main Gym')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/Main+Gymnasium/@32.8771494,-117.2434366,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc06c71e5c3c8b:0x4d59a2c95e1ae459!8m2!3d32.8771494!4d-117.2412479' target='_blank'>"
		+ "<img src='../images/maingym.PNG' class='resize'>"+
		"<p>Scholars Ln, San Diego, CA 92161</p></a></div>" + 
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 9:30AM - 11PM<br>Monday: 7AM - 11PM<br>Tuesday: 7AM - 11PM<br>Wednesday: 7AM - 11PM<br>" +
		"Thursday: 7AM - 11PM<br>Friday: 7AM - 11PM<br>Saturday: 7:30AM - 10PM</p><p>Phone: (858) 822-4815</p></div></div></div>";
	else if(gym === 'La Jolla Crossroads')
		document.getElementById('gymInfo').innerHTML = 
		"<div class='container'><div class='row'><div class='col-sm-4'><a href='https://www.google.com/maps/place/La+Jolla+Crossroads/@32.8723297,-117.205461,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc07335344d327:0xfe8625cb17ad32b5!8m2!3d32.8723297!4d-117.2032723' target='_blank'>"
		+ "<img src='../images/crossroads.PNG' class='resize'>"+
		"<p>9085 Judicial Dr, San Diego, CA 92122</p></a></div>" +
		"<div class='col-sm-4'><h5>Gym Hours: </h5><p>Sunday: 7AM - 10PM<br>Monday: 5AM - 10PM<br>Tuesday: 5AM - 10PM<br>Wednesday: 5AM - 10PM<br>" +
		"Thursday: 5AM - 10PM<br>Friday: 5AM - 10PM<br>Saturday: 7AM - 10PM</p><p>Phone: (888) 624-9167</p></div></div></div>";

}