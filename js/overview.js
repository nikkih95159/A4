// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	if (localStorage.location && localStorage.selectedTime) 
        document.getElementById("chosenLocation").innerHTML = "<div class='container'><h6> Location: " + localStorage.getItem("location")
         + "<br>Time: " + localStorage.getItem("selectedTime") + " minutes</h6></div>";
	else 
		document.getElementById("chosenLocation").innerHTML = "You have not chosen a gym location.";
}