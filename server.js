var express = require('express');
var app = express();
var cors = require('cors');
var config = require('./config/config');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(config.BREWERYDB_KEY);
var mongoose = require("mongoose");
app.db = mongoose.connect('mongodb://127.0.0.1/test');
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
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/AmericanIPAs', function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 30 }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/Dortmunder', function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 79 }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/ScotchAle', function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 15 }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/BelgianFrench', function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 65 }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/cider', function(req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 155 }, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)], data[Math.ceil(Math.random()*data.length)]];
      res.send(limitedData);
    }
  });
});