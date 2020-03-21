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
	if(user.password !== password){
		errors.push("Wrong password.");
		res.render('auth/login',{
			errors: errors
		});
		return;
	}
	res.locals.user = user;
	console.log(user);
	res.redirect('/');
};