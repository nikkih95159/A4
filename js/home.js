// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
	// localStorage.clear();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	if (localStorage.mostRecentWorkout === "true") {
		document.getElementById("mostRecent").innerHTML = "<a href='pages/overview.html'>" + 
		"<button type='button' class='btn btn-info'>Most Recent Workout</button></a>";
	}
	else {
		document.getElementById("mostRecent").innerHTML = "<a href='pages/overview.html'>" + 
		"<button type='button' class='btn btn-info' disabled>Most Recent Workout</button></a>";
	}
}

function clearHistory() {
	localStorage.clear();
	initializePage();
}