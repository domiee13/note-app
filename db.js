var lowdb = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = lowdb(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({users:[]})
	.write()


module.exports = db;