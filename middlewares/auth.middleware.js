var db = require('../db');

module.exports.requireAuth = function(req,res,next){
	// console.log(req.signedCookies);
	if(!req.signedCookies.userId){
		res.redirect('/login');
		return;
	}
	var user = db.get('users').find({userId: req.signedCookies.userId}).value();

	if(!user){
		res.redirect('/login');
		return;
	}
    res.locals.user = user;//Toi tung type nham cho nay va tim bug mai khong ra =))) LOL
    console.log("res.locals.user = ",res.locals.user);
	next();
};