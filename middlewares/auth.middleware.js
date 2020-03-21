var db = require('../db');

module.exports.requireAuth = function(req,res,next){
	console.log(req.signedCookies);
	if(!req.signedCookies.userId){
		res.redirect('/login');
		return;
	}
	var user = db.get('users').find({userId: req.signedCookies.userId}).value();

	if(!user){
		res.redirect('/login');
		return;
	}
	res.locals.uesr = user;
	next();
};