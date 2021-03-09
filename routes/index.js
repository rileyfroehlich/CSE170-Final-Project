
/*
 * GET home page.
 */

var data = require('../lesson_data.json')
var newLesson = {
	"lesson": "1.6", 
	"description": "Lesson 1.6 - Dictionaries", 
	"question": "<p>1|   {'Fruit': 'Apple', 'Color': 'Red', 'Amount': 7}<br>2|   print \"dict['Fruit']:\", dict['Fruit']<br>3|   print \"dict['Amount']:\", dict['Amount']</p>", 
	"question-prompt":"Select the appropriate result when the code above is executed.", 
	"answer-choice-1":"dict['Fruit']: Fruit<br>dict['Amount']: Amount", 
	"answer-choice-2":"dict['Fruit']: Apple<br>dict['Amount']: 7", 
	"answer-choice-3":"dict['Fruit']: Fruit<br>dict['Amount']: 7", 
	"answer-choice-4":"dict['Fruit']: Apple<br>dict['Amount']: Amount",
	"correct-answer":"answer-choice-2"
}

var newLessonUnlocked = 3
var newLessonAdded = false
var totalBeginnerLessons = 5

exports.viewHome = function(req, res){
  res.render('home', data);
};

exports.viewLogin = function(req, res){
  res.render('login', data);
};

exports.saveUsername = function(req, res){
	data.username=(req.body.user)

	//NEXT LINES MAKE IT REFRESH ON EVERY LOGIN
	var lessonLength=data['projects'].length
	if( lessonLength > totalBeginnerLessons ){
		var toDelete = lessonLength - totalBeginnerLessons
		data["projects"].splice( totalBeginnerLessons, toDelete )
	}

	var i=0
	for( var lesson in data['projects'] ){

		data['projects'][lesson]['lesson-completed'] = false
		i=i+1
	}
	data['streak'] = 0
	data.difficulty = "Beginner"
	data.friends = []
	newLessonAdded = false
}

exports.viewQuestion = function(req, res){
	var projectID = req.params.lesson;
	var split = projectID.split(".");
	projectID = split[1];
	projectID = parseInt(projectID) - 1;

    res.render('question', data['projects'][projectID]);
};

exports.viewLeaderboard = function(req, res){
	res.render('leaderboard', data);
};

exports.viewProfile = function(req, res){
	res.render('profile', data);
};

exports.lessonCompleted = function(req,res){
	var lesson_num = req.body.lesson_num
	var split = lesson_num.split(".");
	lesson_num = split[1];
	lesson_num = parseInt(lesson_num) - 1;

	data['projects'][lesson_num]['lesson-completed'] = true

	var i=0
	for( var lesson in data['projects'] ){
		if(!data['projects'][lesson]['lesson-completed']){
			i=i+1
		}
	}
	data['streak'] = data['streak'] + 1

	//add new lesson based on completion
	if( i < newLessonUnlocked && !newLessonAdded ){

		data.projects.push(newLesson)
		data.difficulty = "Intermediate"
		newLessonAdded = true
	}
};

exports.lessonIncorrect = function(req,res){
	data['streak'] = 0
};

exports.addFriend = function(req,res){
	var toPush = { "username":req.body.user,"streak":0}
	data.friends.push(toPush)
}