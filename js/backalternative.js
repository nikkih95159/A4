// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {

    document.getElementById("duration").innerHTML = "<h5>Duration: " + localStorage.getItem("selectedTime") + " minutes</h5>";

        if (localStorage.selectedAbs != null && localStorage.abs === "abs") {
            document.getElementById("nextWorkout").innerHTML = "<a href='videoguideabs.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }
        if (localStorage.selectedShoulders != null && localStorage.shoulders === "shoulders") {
            document.getElementById("nextWorkout").innerHTML = "<a href='videoguideshoulders.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }

        if (localStorage.selectedLegs != null && localStorage.legs === "legs") {
            document.getElementById("nextWorkout").innerHTML = "<a href='videoguidelegs.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }

        if (localStorage.selectedArms != null && localStorage.arms ==="arms") {
            document.getElementById("nextWorkout").innerHTML = "<a href='videoguidearms.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }

        if (localStorage.selectedChest != null && localStorage.chest === "chest") {
            document.getElementById("nextWorkout").innerHTML = "<a href='videoguidechest.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }
        //if they only click one muscle
        document.getElementById("finishedWorkout").innerHTML = "<a href='lastpage.html'>" + 
        "<button type='button' style='float: right;' class='btn btn-outline-success'>Finished!</button></a>";
        return;

}

