// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	if ($(":checkbox[name='muscle']:checked").length >= 1)
		document.getElementById("next").disabled = false;
	else
	document.getElementById("next").disabled = true;
})

function toggle() {
	if ($(":checkbox[name='muscle']:checked").length >= 1)
		document.getElementById("next").disabled = false;
	else 
		document.getElementById("next").disabled = true;
}

$(":checkbox[name='muscle']").change(function(){
	if ($(":checkbox[name='muscle']:checked").length == 2) {                                              
	 $(':checkbox:not(:checked)').prop('disabled', true); 
	}
	else {                                                     
	 $(':checkbox:not(:checked)').prop('disabled', false);
	}
});

$('img').click(function(){
	if ($(":checkbox[name='muscle']:checked").length == 2) {
		if ($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else 
			alert("You can only select two muscles!"); 
	}
	else {  
		if ($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected'); 
	}
});

function initializePage() {
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

/* get the selected muscles user chooses */
function getMuscles() {
	var armsChecked = document.getElementById("arms").checked;
	var shouldersChecked = document.getElementById("shoulders").checked;
	var legsChecked = document.getElementById("legs").checked;
	var backChecked = document.getElementById("back").checked;
	var absChecked = document.getElementById("abs").checked;
	var chestChecked = document.getElementById("chest").checked;

	if (armsChecked === true) {
		var selArms = document.getElementById("arms").value;
		localStorage.setItem("selectedArms", selArms);
	}
	else {
		localStorage.removeItem("selectedArms");
	}

	if (shouldersChecked === true) {
		var selShoulders = document.getElementById("shoulders").value;
		localStorage.setItem("selectedShoulders", selShoulders);
	}
	else {
		localStorage.removeItem("selectedShoulders");
	}
	
	if (legsChecked === true) {
		var selLegs = document.getElementById("legs").value;
		localStorage.setItem("selectedLegs",selLegs);
	}
	else {
		localStorage.removeItem("selectedLegs");
	}

	if (backChecked === true) {
		var selBack = document.getElementById("back").value;
		localStorage.setItem("selectedBack", selBack);
	}
	else {
		localStorage.removeItem("selectedBack");
	}

	if (absChecked === true) {
		var selAbs = document.getElementById("abs").value;
		localStorage.setItem("selectedAbs", selAbs);
	}
	else {
		localStorage.removeItem("selectedAbs");
	}

	if (chestChecked === true) {
		var selChest = document.getElementById("chest").value;
		localStorage.setItem("selectedChest", selChest);
	}
	else {
		localStorage.removeItem("selectedChest");
	}
	
}
