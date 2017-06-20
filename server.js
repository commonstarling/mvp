var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static('public'));

var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
