// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	
})

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
  
	  var img = new Image();
	  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
	  output.appendChild(img);
	}
  
	function error() {
	  output.innerHTML = "Unable to retrieve your location";
	}
  
	output.innerHTML = "<p>Locating…</p>";
  
	navigator.geolocation.getCurrentPosition(success, error);
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
	}