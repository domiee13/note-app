var express = require('express');

var Note = require('../note');
var db  = require('../db');

var router = express.Router();

// var controller = require('../controllers/create.controller');

router.get('/',function(req,res){
    res.render('notes/create');
});

router.post('/',function(req,res){
    var user = res.locals.user;
    var {color, title, content} = req.body;
    var newNote = new Note(color,title,content);
    user.notes.push(newNote);
    db.write();
    res.redirect('/notes');
});

module.exports = router;
