var mongoose = require('mongoose');
var db = require('./../db/connection.js');
var Todo = require('./../db/todo.models.js');

var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app) {
	app.get('/api/table', function(req, res) {
		ToDo.find({}, function(err, data) {
			if (err) throw err;
			res.json(data);
		})
	})
}