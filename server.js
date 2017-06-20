var express = require('express');
var app = express();
var cors = require('cors');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('2065166f991f554ba66c6c02263c9554');
var path = require('path');
app.use(express.static('public'));
app.use(cors());

var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/all', cors(), function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description' }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*50)], data[Math.ceil(Math.random()*50)], data[Math.ceil(Math.random()*50)], data[Math.ceil(Math.random()*50)], data[Math.ceil(Math.random()*50)]];
      res.send(limitedData);
    }
  });
});
