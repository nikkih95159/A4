// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {

    document.getElementById("duration").innerHTML = "<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>";

	if (localStorage.firstExercise === "true") {
        localStorage.legs= "false";
		localStorage.firstExercise = "false";
		if (localStorage.selectedShoulders != null) {
			document.getElementById("nextWorkout").innerHTML = "<a href='videoguideshoulders.html'>" + 
			"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
			return;
		}

		if (localStorage.selectedChest != null) {
			document.getElementById("nextWorkout").innerHTML = "<a href='videoguidechest.html'>" + 
			"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
			return;
		}

		if (localStorage.selectedBack != null) {
			document.getElementById("nextWorkout").innerHTML = "<a href='videoguideback.html'>" + 
			"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
			return;
		}

		if (localStorage.selectedAbs != null) {
			document.getElementById("nextWorkout").innerHTML = "<a href='videoguideabs.html'>" + 
			"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
			return;
		}

		if (localStorage.selectedArms != null) {
			document.getElementById("nextWorkout").innerHTML = "<a href='videoguidearms.html'>" + 
			"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
			return;
        }
        //if they only click one muscle
        document.getElementById("finishedWorkout").innerHTML = "<a href='lastpage.html'>" + 
        "<button type='button' style='float: right;' class='btn btn-outline-success'>Finished!</button></a>";
        return;
	}
	else {
		document.getElementById("finishedWorkout").innerHTML = "<a href='lastpage.html'>" + 
        "<button type='button' style='float: right;' class='btn btn-outline-success'>Finished!</button></a>";
        localStorage.firstExercise = true;
	}
}

