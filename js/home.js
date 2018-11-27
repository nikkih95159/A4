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
		document.getElementById("mostRecent").innerHTML = "<a href='overview.html'>" +
		"<button type='button' class='btn btn-info'>Most Recent Workout</button></a>";
	}
	else {
		document.getElementById("mostRecent").innerHTML = "<a href='overview.html'>" +
		"<button type='button' class='btn btn-info' disabled>Most Recent Workout</button></a>";
	}
}

function clearHistory() {
	localStorage.clear();
	initializePage();
}


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


/*CODE FOR SIGN UP AND LOG IN*/
//store sign-up info into variable
var newid = document.getElementById("signupid");
var newpass = document.getElementById("signuppass");

// store value of sign-up variable into localStorage
function store() {

	if(newid.value== "" && newpass.value== ""){
		alert("Please Enter a Username and Password");
	 }

	else{
    localStorage.setItem('username', newid.value);
    localStorage.setItem('userpw', newpass.value);
	}
}

// check if stored value from sign-up form is equal to value of log-in form
function check() {

    // get sign-up value from localStorage
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('userpw');

    // store log-in value into variable
    var logid = document.getElementById('loginid').value;
    var logpass = document.getElementById('loginpass').value;

		//if loginid is equal to signupid in localStorage and logpass is equal to signuppass open next page
    if (logid==storedName && logpass==storedPw){
			//window.open directs user to next page by opening up a new tab
      window.open('../A4/pages/homepage.html');
			//window.location.href directs user to next page without opening a new tab
      //window.location.href = '../A4/pages/homepage.html';
    }

		// if logid and logpass is blank notify
		else if (logid=="" && logpass==""){
			alert("Username and Password is blank");
		}

		//if logid and logpass do not match notify
		else{
			alert("Wrong Username and Password");
		}
	}
