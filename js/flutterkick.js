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

function initializePage() {

    document.getElementById("duration").innerHTML = "<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>";

    if (localStorage.second === "abs") {
        document.getElementById("finishedWorkout").innerHTML = "<a href='lastpage.html'>" + 
        "<button type='button' style='float: right;' class='btn btn-outline-success'>Finished!</button></a>";
    }
    else {
        if (localStorage.selectedArms != null) {
            document.getElementById("nextWorkout").innerHTML = "<a href='hammercurl.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }
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

        if (localStorage.selectedChest != null) {
            document.getElementById("nextWorkout").innerHTML = "<a href='cablefly.html'>" + 
            "<button type='button' style='float: right;' class='btn btn-primary' id='next'>Next</button></a>";
            return;
        }
    }
}

