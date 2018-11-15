// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
    document.getElementById("next").disabled = true;
	initializePage();
})

function toggle() {
    document.getElementById("next").disabled = false;
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	if (localStorage.location) 
        document.getElementById("chosenLocation").innerHTML = "<div class='container'><h6>Location: " + 
        localStorage.getItem("location") +"</h6></div>";
	else 
		document.getElementById("chosenLocation").innerHTML = "You have not chosen a gym location.";
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
}

// var radios = [].slice.call(document.querySelectorAll('input[name=time]'));

// function reset() {
//     document.getElementById('15').disabled = false;
//     document.getElementById('15').checked = false;
//     document.getElementById('30').disabled = false;
//     document.getElementById('30').checked = false;
//     document.getElementById('45').disabled = false;
//     document.getElementById('45').checked = false;
//     document.getElementById('60').disabled = false;
//     document.getElementById('60').checked = false;
//     document.getElementById('75').disabled = false;
//     document.getElementById('75').checked = false;
//     document.getElementById('90').disabled = false;
//     document.getElementById('90').checked = false;
//     document.getElementById('105').disabled = false;
//     document.getElementById('105').checked = false;
//     document.getElementById('120').disabled = false;
//     document.getElementById('120').checked = false;
//     document.getElementsById('next').disabled = true;
// }

// radios.forEach(function(radio) {
//     radio.addEventListener('change', function() { 
//         radios.forEach(function(r) {
//             r.disabled = r !== radio;
//         });
//     });
// });

function getTime() {
    var e = document.getElementById("timeSelect");
    var selTime = e.options[e.selectedIndex].value;
    localStorage.setItem("selectedTime", selTime);
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function clickDropdown() {
    document.getElementById("timeDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}