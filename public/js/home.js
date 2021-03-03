// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	initLogout()
}

function initLogout(e) {
	$('#login-form').submit(function(e)	{
		window.location.replace("https://a7-doctorate-dre.herokuapp.com/")
		return false
	})
	
	function postCallback(res){
		return;
	}
}