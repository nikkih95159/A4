// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#start").click(function(e) {
		
	});
}

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
<<<<<<< Updated upstream
=======
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

var radios = [].slice.call(document.querySelectorAll('input[name=gym]'));

function reset() {
		document.getElementById('regencia').disabled = false;
		document.getElementById('regencia').checked = false;
		document.getElementById('costaverde').disabled = false;
		document.getElementById('costaverde').checked = false;
		document.getElementById('regents').disabled = false;
		document.getElementById('regents').checked = false;
		document.getElementById('rimac').disabled = false;
		document.getElementById('rimac').checked = false;
		document.getElementById('main').disabled = false;
		document.getElementById('main').checked = false;
		document.getElementById('crossroads').disabled = false;
		document.getElementById('crossroads').checked = false;
		document.getElementById('next').disabled = true;
}

radios.forEach(function(radio) {
		radio.addEventListener('change', function() { 
				radios.forEach(function(r) {
						r.disabled = r !== radio;
				});
		});
});

function getLocation() {
	var gymLocation = document.querySelector('input[name=gym]:checked').value;
	localStorage.setItem("location", gymLocation);
>>>>>>> Stashed changes
}