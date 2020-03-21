var db = require('../db');
var shortid = require('shortid');

module.exports.signup = function(req, res){
	res.render('auth/signup');
};