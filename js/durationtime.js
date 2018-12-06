// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
    // if (localStorage.selectedTime != null)
      // document.getElementById("next").disabled = false;
    // else
      document.getElementById("next").disabled = true;
    initializePage();
})

var modal = document.getElementById('myModal');
var btn = document.getElementById("help");
var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggle() {
    document.getElementById("next").disabled = false;
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
}

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
