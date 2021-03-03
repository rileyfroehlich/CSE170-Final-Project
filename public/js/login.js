
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
   initSaveUsername()
}

function initSaveUsername(e) {
	$('#login-form').submit(function(e)	{
		console.log("submitting form..")
		var username = $('#username').val()
		$.post('saveUsername', {user: username}, postCallback)
		//window.location.replace("https://a7-doctorate-dre.herokuapp.com/home")
		window.location.replace("http://localhost:3000/home")
		return false
	})
	
	function postCallback(res){
		return;
	}
}
