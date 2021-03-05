// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	initWelcomeMessage()
	initLogout()
}

function initWelcomeMessage(e){

	if($(".lesson").length <= 0){
		var prompt = $('#lesson-prompt').text("All lessons completed!\nGood Work!")
		prompt.html(prompt.html().replace(/\n/g,'<br/>'));
	}
	else{
		$('#lesson-prompt').text("Choose any lesson to get started")
	}
}

function initLogout(e) {
	$('.log-out-button').click(function(e)	{

		window.location.replace("https://a8-doctorate-dre.herokuapp.com/")

		//<<<<<<<<<<<<<UNCOMMENT FOR LOCAL TESTING>>>>>>>>>>>>>
		//window.location.replace("http://localhost:3000/")
		return false
	})
}