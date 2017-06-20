var express = require('express');
var app = express();
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('2065166f991f554ba66c6c02263c9554');
var path = require('path');
app.use(express.static('public'));

var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/all', function(req, res) {
  var options = {
    url: "https://api.brewerydb.com/v2/beers?key=2065166f991f554ba66c6c02263c9554&format=json&abv=-5",
    abv: -5,
    dataType: 'json'
  }

});
