// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {

    document.getElementById("duration").innerHTML = "<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>";

        if (localStorage.second !== "arms") {
            if (localStorage.currentPlan === "plan1") {
                if (localStorage.selectedAbs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='videoguideabs.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
                if (localStorage.selectedShoulders != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='videoguideshoulders.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }

                if (localStorage.selectedLegs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='videoguidelegs.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }

                if (localStorage.selectedBack != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='videoguideback.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }

                if (localStorage.selectedChest != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='videoguidechest.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
            }
            else if (localStorage.currentPlan === "plan2") {
                if (localStorage.selectedShoulders != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='reardeltflys.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedLegs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='frontsquats.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedBack != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='chinups.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedAbs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='flutterkick.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedChest != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='cablefly.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
            }
            else if (localStorage.currentPlan === "plan3") {
                if (localStorage.selectedShoulders != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='shoulderpress.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedLegs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='highbarsquats.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedBack != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='hyperextension.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedAbs != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='russiantwist.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
        
                if (localStorage.selectedChest != null) {
                    document.getElementById("nextWorkout").innerHTML = "<a href='pushup.html'>" + 
                    "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
                    return;
                }
            }
        }
        else {
            //if they only click one muscle
            document.getElementById("finishedWorkout").innerHTML = "<a href='lastpage.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-outline-success'>Finished!</button></a>";
        }

}

