// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	if (localStorage.location && localStorage.selectedTime) 
        document.getElementById("chosenLocation").innerHTML = "<div class='container'><h6>Recap:</h6><p>Location: " + localStorage.getItem("location")
         + "<br>Time: " + localStorage.getItem("selectedTime") + " minutes</p></div>";
	else 
		document.getElementById("chosenLocation").innerHTML = "You have not chosen a gym location.";

	var recent = "true";
	localStorage.setItem("mostRecentWorkout", recent);
		
	outputWorkout();
}

function outputWorkout() {

	// display times for muscles
	if (localStorage.selectedArms != null)
		document.getElementById("overviewArms").innerHTML = "<h5>Arms: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/arms.jpg' alt='Arms image' class='resize'>";
	
	if (localStorage.selectedShoulders != null)
		document.getElementById("overviewShoulders").innerHTML = "<h5>Shoulders: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/shoulder.jpg' alt='Shoulders image' class='resize'>";

	if (localStorage.selectedLegs != null)
		document.getElementById("overviewLegs").innerHTML = "<h5>Legs: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/leg.png' alt='Legs image' class='resize'>";

	if (localStorage.selectedBack != null)
		document.getElementById("overviewBack").innerHTML = "<h5>Back: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/back.jpg' alt='Back image' class='resize'>";

	if (localStorage.selectedAbs != null)
		document.getElementById("overviewAbs").innerHTML = "<h5>Abs: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/abs.png' alt='Abs image' class='resize'>";

	if (localStorage.selectedChest != null)
		document.getElementById("overviewChest").innerHTML = "<h5>Chest: </h5><p>for " + localStorage.getItem("selectedTime")/2 + " minutes</p><img src='../images/chest.png' alt='Chest image' class='resize'>";

	var firstExercise = "true";
	localStorage.setItem("firstExercise", firstExercise);
	// display start button for starting workout
	if (localStorage.selectedArms != null) {
		document.getElementById("start").innerHTML = "<a href='videoguidearms.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}

	if (localStorage.selectedShoulders != null) {
		document.getElementById("start").innerHTML = "<a href='videoguideshoulders.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}

	if (localStorage.selectedLegs != null) {
		document.getElementById("start").innerHTML = "<a href='videoguidelegs.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}

	if (localStorage.selectedBack != null) {
		document.getElementById("start").innerHTML = "<a href='videoguideback.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}

	if (localStorage.selectedAbs != null) {
		document.getElementById("start").innerHTML = "<a href='videoguideabs.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}

	if (localStorage.selectedChest != null) {
		document.getElementById("start").innerHTML = "<a href='videoguidechest.html'>" + 
		"<button type='button' style='float: right;' class='btn btn-primary' id='next'>Start!</button></a>";
		return;
	}
}