var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
