// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
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
	outputCustom();
}

function plan1() {
	localStorage.setItem("currentPlan", "plan1");
	if (localStorage.selectedArms != null) {
		window.location.href = "videoguidearms.html";
		return;
	}
	if (localStorage.selectedShoulders != null) {
		window.location.href = "videoguideshoulders.html";
		return;
	}
	if (localStorage.selectedLegs != null) {
		window.location.href = "videoguidelegs.html";
		return;
	}
	if (localStorage.selectedBack != null) {
		window.location.href = "videoguideback.html";
		return;
	}
	if (localStorage.selectedAbs != null) {
		window.location.href = "videoguideabs.html";
		return;
	}
	if (localStorage.selectedChest != null) {
		window.location.href = "videoguidechest.html";
		return;
	}
}

function plan2() {
	localStorage.setItem("currentPlan", "plan2");
	if (localStorage.selectedArms != null) {
		window.location.href = "hammercurl.html";
		return;
	}
	if (localStorage.selectedShoulders != null) {
		window.location.href = "reardeltflys.html";
		return;
	}
	if (localStorage.selectedLegs != null) {
		window.location.href = "frontsquats.html";
		return;
	}
	if (localStorage.selectedBack != null) {
		window.location.href = "chinups.html";
		return;
	}
	if (localStorage.selectedAbs != null) {
		window.location.href = "flutterkick.html";
		return;
	}
	if (localStorage.selectedChest != null) {
		window.location.href = "cablefly.html";
		return;
	}
}

function plan3() {
	localStorage.setItem("currentPlan", "plan3");
	if (localStorage.selectedArms != null) {
		window.location.href = "tricepextensions.html";
		return;
	}
	if (localStorage.selectedShoulders != null) {
		window.location.href = "shoulderpress.html";
		return;
	}
	if (localStorage.selectedLegs != null) {
		window.location.href = "highbarsquats.html";
		return;
	}
	if (localStorage.selectedBack != null) {
		window.location.href = "hyperextension.html";
		return;
	}
	if (localStorage.selectedAbs != null) {
		window.location.href = "russiantwist.html";
		return;
	}
	if (localStorage.selectedChest != null) {
		window.location.href = "pushup.html";
		return;
	}
}

function outputWorkout() {
	var timeCheck = 0;
	var dividedTime = localStorage.getItem("selectedTime");

	if (localStorage.selectedArms != null) {
		timeCheck++;
		localStorage.setItem("second", "arms");
	}
	if (localStorage.selectedShoulders != null) {
		timeCheck++;
		localStorage.setItem("second", "shoulders");
	}
	if (localStorage.selectedLegs != null) {
		timeCheck++;
		localStorage.setItem("second", "legs");
	}
	if (localStorage.selectedBack != null) {
		timeCheck++;
		localStorage.setItem("second", "back");
	}
	if (localStorage.selectedAbs != null) {
		timeCheck++;
		localStorage.setItem("second", "abs");
	}
	if (localStorage.selectedChest != null) {
		timeCheck++;
		localStorage.setItem("second", "chest");
	}
	
	
	if (timeCheck === 2)
		dividedTime = localStorage.getItem("selectedTime")/2;
	localStorage.setItem("dividedTime",dividedTime);

	// display times for muscles
	if (localStorage.selectedArms != null) {
		document.getElementById("overviewArms").innerHTML = "<div class='col'><h5>Arms: </h5><p>Preacher curls for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/pic1.gif' alt='Arms image' class='resize'></div></div>";
		document.getElementById("overviewArms1").innerHTML = "<div class='col'><h5>Arms: </h5><p>Hammer curls for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/hammercurl.gif' alt='Hammer curls image' class='resize'></div></div>";
		document.getElementById("overviewArms2").innerHTML = "<div class='col'><h5>Arms: </h5><p>Tricep extensions for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/ropetricepextension.gif' alt='Tricep Extensions image' class='resize'></div></div>";
		localStorage.setItem("arms", "arms");
	}

	if (localStorage.selectedShoulders != null) {
		document.getElementById("overviewShoulders").innerHTML = "<div class='col'><h5>Shoulders: </h5><p>Arnorld press for " + localStorage.getItem("dividedTime") +
		 " minutes</p><img src='../images/arnoldpress.gif' alt='Shoulders image' class='resize'></div></div>";
		 document.getElementById("overviewShoulders1").innerHTML = "<div class='col'><h5>Shoulders: </h5><p>Rear delt fly for " + localStorage.getItem("dividedTime") +
		 " minutes</p><img src='../images/reardeltfly.gif' alt='Shoulders image' class='resize'></div></div>";
		 document.getElementById("overviewShoulders2").innerHTML = "<div class='col'><h5>Shoulders: </h5><p>Shoulder press for " + localStorage.getItem("dividedTime") +
		 " minutes</p><img src='../images/shoulderpress.gif' alt='Shoulders image' class='resize'></div></div>";
		localStorage.setItem("shoulders", "shoulders");
	}

	if (localStorage.selectedLegs != null) {
		document.getElementById("overviewLegs").innerHTML = "<div class='col'><h5>Legs: </h5><p>High knees for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/highKnees.gif' alt='Legs image' class='resize'></div></div>";
		document.getElementById("overviewLegs1").innerHTML = "<div class='col'><h5>Legs: </h5><p>Front squats for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/frontsquat.gif' alt='Legs image' class='resize'></div></div>";
		document.getElementById("overviewLegs2").innerHTML = "<div class='col'><h5>Legs: </h5><p>High bar squat for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/barbellsquat.gif' alt='Legs image' class='resize'></div></div>";
		localStorage.setItem("legs", "legs");
	}

	if (localStorage.selectedBack != null) {
		document.getElementById("overviewBack").innerHTML = "<div class='col'><h5>Back: </h5><p>Seated rows for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/seatedrow.gif' alt='Back image' class='resize'></div></div>";
		document.getElementById("overviewBack1").innerHTML = "<div class='col'><h5>Back: </h5><p>Chin-ups for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/chinup.gif' alt='Back image' class='resize'></div></div>";
		document.getElementById("overviewBack2").innerHTML = "<div class='col'><h5>Back: </h5><p>Hyper extensions for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/hyperextension.gif' alt='Back image' class='resize'></div></div>";
		localStorage.setItem("back", "back");
	}

	if (localStorage.selectedAbs != null) {
		document.getElementById("overviewAbs").innerHTML = "<div class='col'><h5>Abs: </h5><p>Plank for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/plank.gif' alt='Abs image' class='resize'></div></div>";
		document.getElementById("overviewAbs1").innerHTML = "<div class='col'><h5>Abs: </h5><p>Flutter kicks for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/flutterkick.gif' alt='Abs image' class='resize'></div></div>";
		document.getElementById("overviewAbs2").innerHTML = "<div class='col'><h5>Abs: </h5><p>Russian twists for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/russiantwist.gif' alt='Abs image' class='resize'></div></div>";
		localStorage.setItem("abs", "abs");
	}

	if (localStorage.selectedChest != null) {
		document.getElementById("overviewChest").innerHTML = "<div class='col'><h5>Chest: </h5><p>Bench presses for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/benchpress.gif' alt='Chest image' class='resize'></div></div>";
		document.getElementById("overviewChest1").innerHTML = "<div class='col'><h5>Chest: </h5><p>Cable fly for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/cablefly.gif' alt='Chest image' class='resize'></div></div>";
		document.getElementById("overviewChest2").innerHTML = "<div class='col'><h5>Chest: </h5><p>Push-ups for " + localStorage.getItem("dividedTime") + 
		" minutes</p><img src='../images/pushup.gif' alt='Chest image' class='resize'></div></div>";
		localStorage.setItem("chest", "chest");
	}

}