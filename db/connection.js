var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_7v4z3tw3:2qaq5rqnle1qubc44t1kd0h7d3@ds123400.mlab.com:23400/heroku_7v4z3tw3');
var db = mongoose.connection;

db.on('error', function(error) {
	console.log(error);
});

db.once('open', function() {
	console.log('Mongoose connection opened');
});

module.exports = db;