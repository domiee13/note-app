var express = require('express');
var router = express.Router();

var Note = require('../note');

module.exports.create = function(req,res){
	res.render('notes/index');
};

module.exports.postCreate = function(req, res){
	var title = req.body.title;
	var content = req.body.content;
	var note = new Note(title, content);
	user.notes.push(note);
	console.log(user);
	res.redirect('/notes');
};
