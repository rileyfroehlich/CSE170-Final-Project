// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	var correct=false

	$("button").click(function() {
		var selected = $(this).attr('id')
		var answer = $("#correct-answer").text().trim()

		if( selected == answer || correct){
			$('#display-outcome').text("Correct!")
			$('#display-outcome').removeClass('incorrect')
			$('#display-outcome').addClass('correct')
			$('#back-button').show()
			correct=true
		}
		else{
			$('#display-outcome').text("Try again")
			$('#display-outcome').removeClass('correct')
			$('#display-outcome').addClass('incorrect')
			$('#back-button').hide()
		}
	});
}

function answer_select(e){
	return;
	var selected = $(this).attr('id')
	var answer = $("#correct-answer").text().trim()
	console.log(selected)

	$('#display-outcome').text("Correct!")

	if( selected == answer ){
		$('#display-outcome').text("Correct!")
		$('#display-outcome').removeClass('incorrect')
		$('#display-outcome').addClass('correct')
		$('#back-button').show()
	}
	else{
		$('#display-outcome').text("Try again")
		$('#display-outcome').removeClass('correct')
		$('#display-outcome').addClass('incorrect')
	}

}
