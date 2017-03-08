var express = require('express');
var app = express();
var port = 3000;

// require('./api/get-library')(app);
// require('./api/post-library')(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});