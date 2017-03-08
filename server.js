var express = require('express');
var app = express();
PORT = process.env.PORT || 3000;

var db = require('./db/connection.js');
var Todo = require('./db/todo.models.js');

// require('./api/get-library')(app);
// require('./api/post-library')(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}))

var getRoute = require('./api/getitem.js')(app);
var postRoute = require('./api/postitem.js')(app);

app.use(express.static(__dirname + "/app"));

app.listen(PORT, function() {
    console.log("listening on port:" + PORT);
});