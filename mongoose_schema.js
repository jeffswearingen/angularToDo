var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angularToDo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected');
});

var angularSchema = mongoose.Schema({
	todo: String,
	completeBy: Date
});

var AngularSchema = mongoose.model('AngularSchema', angularSchema);

mongoose.model('AngularSchema', angularSchema);