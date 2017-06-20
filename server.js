var express = require('express');
var app = express();
var cors = require('cors');
var config = require('./config/config');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(config.BREWERYDB_KEY);
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
      var limitedData = [data[Math.ceil(Math.random()*30)], data[Math.ceil(Math.random()*30)], data[Math.ceil(Math.random()*30)], data[Math.ceil(Math.random()*30)], data[Math.ceil(Math.random()*30)]];
      res.send(limitedData);
    }
  });
});
