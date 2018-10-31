// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#start").click(function(e) {
		$('.jumbotron h1').text("Gym-Pal works!");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}