
/*
 * GET home page.
 */

var data = require('../lesson_data.json')

exports.view = function(req, res){
  console.log(data)
  res.render('home', data)
};