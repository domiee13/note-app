var shortid = require('shortid');
var md5 = require('md5'); 

var db = require('../db');
var User = require('../user');


module.exports.signup = function(req, res){
	res.render('auth/signup');
};

module.exports.postSignup = function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var repassword = req.body.repassword;
	console.log(req.body);
	var errors = [];
	var user = db.get('users').find({email:email}).value()
	if(user){
		errors.push("Tài khoản đã tồn tại.");
		res.render('auth/signup',{
			errors: errors
		})
		return;
	}
	if(password!==repassword){
		errors.push("Mật khẩu không khớp.");
		res.render('auth/signup',{
			errors: errors
		})
		return;
	}
	password = md5(password);
	var userId = shortid.generate();
	var newUser = new User(name, userId, email, password);
	db.get('users').push(newUser).write();
	res.redirect('/login');

};