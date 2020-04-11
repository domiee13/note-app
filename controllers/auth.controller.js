var md5 = require('md5');

var db = require('../db');

module.exports.login = function(req,res){
	res.render('auth/login');
};

module.exports.postLogin = function(req,res){
	var errors = [];
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get('users').find({email:email}).value()
	if(!user){
		errors.push("User does not exist.");
		res.render('auth/login',{
			errors: errors
		});
		return;
	}
	//Check password
	if(user.password !== md5(password)){
		errors.push("Wrong password.");
		res.render('auth/login',{
			errors: errors
		});
		return;
	}
	res.cookie('userId', user.userId,{
		signed: true
	});
	res.redirect('/');
};