// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
	localStorage.clear();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#start").click(function(e) {

	});
}

// function signup() {
//
// 	var signupModal = document.getElementById("myModal");
// 	signupModal.style.display = "none";
//
// }

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

//when user clicks signup inside modal return to login page
closesignup.onclick =function(){
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


//function to username and password while logging in
function check(form){
	//variables to get value of sign up username and password
	var newid= document.getElementById("signupid").value
	var newpass = document.getElementById("signuppass").value

	//variable to get value of login username and password
	var uname = document.getElementById("loginid").value
	var pass = document.getElementById("loginpass").value


	//if uname & pass is equal to the username and password from sign up then direct to next page
	if(uname == newid && pass == newpass){
		window.location.href = "../A4/pages/homepage.html";
		console.log("your username is " + uname + " and your password is " + pass);
	}

	//if uname and pass is blank let them know
	else if(uname == "" && pass ==""){
		alert("Username and Password is blank");
	}

	//if username and password is wrong notify
	else{
		alert("Incorrect Username or Password");
	}
}
