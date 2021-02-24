
/*
 * GET home page.
 */

var data = require('../lesson_data.json')

exports.viewHome = function(req, res){
  res.render('home', data)
};

exports.viewLogin = function(req, res){
  res.render('login', data)
};

exports.viewQuestion = function(req, res){
	var projectID = req.params.lesson;
	var split = projectID.split(".");
	projectID = split[1]
	projectID = parseInt(projectID) - 1;

    res.render('question', data['projects'][projectID])
}
