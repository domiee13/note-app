var express =require('express');
var bodyParser = require('body-parser');
var db = require('./db');

var authRoutes = require('./routes/auth.route');
var noteRoutes = require('./routes/note.route');
var createRoutes = require('./routes/create.route');
var signupRoutes = require('./routes/signup.route');

var app =express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('./public'));

app.use('/login', authRoutes);
app.use('/notes', noteRoutes);
app.use('/create', createRoutes);
app.use('/signup', signupRoutes);

app.get('/', function(req,res){
	res.render('index');
});

app.listen(port,function(req,res){
	console.log('App listening on port '+ port + '...');
});