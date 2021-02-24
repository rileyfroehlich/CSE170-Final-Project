// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
    $('.lesson a').click(projectClicked);
}

function projectClicked(e){
    e.preventDefault()

    var lessonID = $(this).text().trim()

	var getURL = "http://localhost:3000/question/" + lessonID
    console.log(getURL)
	$.get(getURL, callBack)
}

function callBack(data){
	return
	console.log(data)
	var selector = '#project' + data['id'] + ' .details'
	$(selector).html(data['title']+ '<br><br>' + data['date'] + '<br><br>' + data['summary'])


}