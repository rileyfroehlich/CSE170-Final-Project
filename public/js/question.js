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
	var lesson_num = $('#lesson-num').text().trim()
	var answer = $("#correct-answer").text().trim()
	var completed = $("#lesson-completed").text().trim()

	console.log(completed)

	if( completed ){
		$("#"+answer).css('background-color', '#4caf50')
		$('#display-outcome').text("Correct!")
		$('#display-outcome').removeClass('incorrect')
		$('#display-outcome').addClass('correct')
		$('#back-button').show()
		correct=true
	}

	$("button").click(function() {
		var selected = $(this).attr('id')

		
		if(correct){

		}
		else if( selected == answer){
			$(this).css('background-color', '#4caf50')
			$('#display-outcome').text("Correct!")
			$('#display-outcome').removeClass('incorrect')
			$('#display-outcome').addClass('correct')
			$('#back-button').show()
			correct=true
			lessonCompleted(lesson_num)
		}
		else{
			var tryAgainText = $('#display-outcome').text("Try again!\n\nStreak Reset")
			tryAgainText.html(tryAgainText.html().replace(/\n/g,'<br/>'));
			$('#display-outcome').removeClass('correct')
			$('#display-outcome').addClass('incorrect')
			$('#back-button').hide()
			lessonIncorrect()
		}
	});
}

function lessonCompleted(lesson_num) {
	lesson_num = lesson_num
	$.post('lessonCompleted', {lesson_num : lesson_num}, postCallback)
  
	function postCallback(res){
		  return;
	}
}

function lessonIncorrect() {
	$.post('lessonIncorrect', postCallback)
  
	function postCallback(res){
		  return;
	}
}