// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {

	// document.getElementById("duration").innerHTML = "<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>";

	if (localStorage.selectedArms != null) {
		document.getElementById("armWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Arm Workout</h1>" + 
			"<h3>Preacher Curl</h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" + 
			"<img class='videoguideimages' src='../images/pic1.gif' alt='Preacher Curl'>" +
			"<h5>Preacher Curls help build up the lower part of your biceps!</h5>" +
				"<h6>For an effective workout, make sure to:</h6>" +
			"<ul>" +
				"<li>Sit with your back straight.</li>" +
				"<li>Put the barbell in your hands and rest your arms on the platform.</li>" +
				"<li>Firmly grip the barbell and slowly bring it towards your shoulders.</li>" +
				"<li>Don't bend your wrists and make sure to use manageable weights.</li>" + 
			"</ul>" + 
			"<br>" +
			"<h6>Don't have this machine at your gym?</h6>" +
			"<a href='armsalternative.html'>Use an alternative exercise.</a>"+
			"</div>";
	}

	if (localStorage.selectedShoulders != null) {
		document.getElementById("shouldersWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Shoulder Workout</h1>" +
			"<h3>Arnold Press</h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" +
			"<img class='videoguideimages' src='../images/arnoldpress.gif' alt='arnold press'>" +
			"<h5>Arnold Press helps to strengthen your shoulders!</h5>" +
			"<h6>For an effective workout, make sure to:</h6>" +
			"<ul>" +
				"<li>Stand straight up with legs spread at shoulder length.</li>" +
				"<li>Hold the dumbbells in front of you at chest height and palms facing your chest.</li>" +
				"<li>Slowly lift the dumbbells up above your head while moving your wrists so that your palms now face away from your body.</li>" +
				"<li>Remember to keep your back straight and to not swing the weight around.</li>" +
			"</ul>" +
			"<h6>Don't have weights at your gym?</h6>" +
			"<a href='shouldersalternative.html'>Use an alternative exercise.</a>" +
			"</div>";
	}

	if (localStorage.selectedLegs != null) {
		document.getElementById("legsWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Leg Workout</h1>" +
			"<h3>High Knees </h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" +
			"<img class='videoguideimages' src='../images/highKnees.gif' alt='high knees'>" +
			"<h5>High Knees help target and strengthen your inner thigh and outer hip areas!</h5>" +
				"<h6> For an effective workout, make sure to:</h6>" +
				"<ul>" +
					"<li>Stand with you legs spread to shoulder length.</li>" +
					"<li>Bring your knees up towards your chest.</li>" +
					"<li>Alternate legs between reps.</li>" +
					"<li>Keep your pelvis stationary to reduce back strain.</li>" +
				"</ul>" +
			"</div>";
	}

	if (localStorage.selectedBack != null) {
		document.getElementById("backWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Back Workout</h1>" +
			"<h3>Seated Rows</h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" +
				"<img class='videoguideimages' src='../images/seatedrow.gif' alt='seatedrow'>" +
				"<h5>Seated Rows help build up your back!</h5>" +
					"<h6>For an effective workout, make sure to:</h6>" +
				"<ul>" +
					"<li>Sit with your back straight and grip the cables with your arms straight in front of you.</li>" +
					"<li>Pull the cables slowly towards your chest and squeeze your shoulder blades</li>" +
					"<li>Make sure not to pull with your wrists and keep your wrists straight.</li>" +
				"</ul>" +
				"<h6>Don't have this machine at your gym?</h6>" +
				"<a href='backalternative.html'>Use an alternative exercise.</a>" +
			"</div>";
	}

	if (localStorage.selectedAbs != null) {
		document.getElementById("absWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Ab Workout</h1>" +
			"<h3>Plank</h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" +
					"<img class='videoguideimages' src='../images/plank.gif' alt='plank'>" +
					"<h5>Planks help build up your abs!</h5>" +
					"<h6>For an effective workout, make sure to:</h6>" + 
				"<ul>" +
				"	<li>Lie down with your stomach to the ground and your feet together.</li>" +
				"	<li>Hold your weight on your forearms and your feet</li>" +
				"	<li>Hold the position as long as you can.</li>" +
				"	<li>Don't bend your back and maintain the position.</li>" + 
				"</ul>" +
						"<!-- <h6>Don't have this machine at your gym?</h6>" +
						"<a href='#'>Use an alternative exercise.</a> -->" +
			"</div>";	
	}

	if (localStorage.selectedChest != null) {
		document.getElementById("chestWorkout").innerHTML = "<div class='jumbotron'>" +
			"<h1>Chest Workout</h1>" +
			"<h3>Bench Press</h3>" +
			"<h5>Duration: " + localStorage.getItem("dividedTime") + " minutes</h5>" +
				"<img class='videoguideimages' src='../images/benchpress.gif' alt='bench press'>" +
				"<h5>Bench presses help build up your chest!</h5>" +
					"<h6>For an effective workout, make sure to:</h6>" +
				"<ul>" +
					"<li>Lie on the bench with a slight arch in your back.</li>" +
					"<li>Push the weight off where it rests and hold the weight with your arms straight infront of your chest.</li>" +
					"<li>Firmly grip the barbell and slowly bring it towards your chest.</li>" +
					"<li>Make sure not to bend your wrists and to tuck in your elbows when bringing the weight down.</li>" +
				"</ul>" +
				"<h6>Don't have weights at your gym?</h6>" +
				"<a href='chestalternative.html'>Use an alternative exercise.</a>" +
			"</div>";
	}

}

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