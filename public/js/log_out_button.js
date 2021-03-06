// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	initLogout()
	initAddFriend()
}

function initLogout(e) {
	$('.log-out-button').click(function(e)	{

		window.location.replace("https://a8-doctorate-dre.herokuapp.com/")

		//<<<<<<<<<<<<<UNCOMMENT FOR LOCAL TESTING>>>>>>>>>>>>>
		//window.location.replace("http://localhost:3000/")
		return false
	})
}

function openForm() {
	document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
	document.getElementById("myForm").style.display = "none";
	$('#username').val('')
}

function initAddFriend(e) {
	$('#confirm-friend').click(function(e)	{
		console.log("submitting form..")
		var username = $('#username').val()
		$.post('addFriend', {user: username}, postCallback)

		$('#username').val('')
		return false
	})
	
	function postCallback(res){
		return;
	}
}

