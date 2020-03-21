var express =require('express');
var bodyParser = require('body-parser');
var db = require('./db');

var authRoutes = require('./routes/auth.route');

var authController = require('./controllers/auth.controller');

var app =express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('./public'));

app.use('/login', authRoutes);

app.get('/', function(req,res){
	res.render('index');
});

app.get('/notes', function(req,res){
	res.render('notes/index',{
		notes: db.get('notes').value()
	});
});

app.get('/create', function(req,res){
	res.render('notes/create');
});
app.post('/create', function(req, res){
	db.get('notes').push(req.body).write();
	console.log(req.body);
	res.redirect('/notes');
})

app.listen(port,function(req,res){
	console.log('App listening on port '+ port + '...');
});