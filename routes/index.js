
/*
 * GET home page.
 */

var data = require('../lesson_data.json')

exports.viewHome = function(req, res){
  console.log(data)
  res.render('home', data)
};

exports.viewLogin = function(req, res){
  console.log(data)
  res.render('login', data)
};

exports.viewQuestion = function(req, res){
  console.log(data)
  res.render('question', data)
};