
/*
 * GET home page.
 */

var data = require('../lesson_data.json')

exports.viewHome = function(req, res){
  res.render('home', data);
};

exports.viewLogin = function(req, res){
  res.render('login', data);
};

exports.viewQuestion = function(req, res){
	var projectID = req.params.lesson;
	var split = projectID.split(".");
	projectID = split[1];
	projectID = parseInt(projectID) - 1;

    res.render('question', data['projects'][projectID]);
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
			if( i%2 == 0){
				data['projects'][lesson]['lesson-new-row'] = true
			}
			else{
				data['projects'][lesson]['lesson-new-row'] = false
			}

			i=i+1
		}
	}
	data['streak'] = data['streak'] + 1
	//res.send(lesson_num)
};

exports.lessonIncorrect = function(req,res){
	data['streak'] = 0
	//res.send(lesson_num)
};
