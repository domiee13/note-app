var express = require('express');

var router = express.Router();

router.get('/', function(req,res){
    var user = res.locals.user;
	res.render('notes/index',{
		notes: user.notes
	});
});

module.exports = router;