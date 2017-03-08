var mongoose = require('mongoose');
mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var ToDoItems = new Schema ({
	todo: {
		type: String
	},
	completeBy: {
		type: Date
	}, 
	completed: {
		type: Boolean
	}
});

var Todo = mongoose.model('Todo', ToDoItems);

module.exports = Todo;
