'use strict';

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

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.get('/all', cors(), function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description' }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/AmericanIPAs', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 30 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/Dortmunder', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 79 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/ScotchAle', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 15 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/BelgianFrench', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 65 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});

app.get('/cider', function (req, res) {
  brewdb.beer.find({ abv: -5, withBreweries: 'Y', format: 'json', order: 'description', styleId: 155 }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      var limitedData = [data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)], data[Math.ceil(Math.random() * data.length)]];
      res.send(limitedData);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImNvcnMiLCJjb25maWciLCJCcmV3ZXJ5RGIiLCJicmV3ZGIiLCJCUkVXRVJZREJfS0VZIiwicGF0aCIsInVzZSIsInN0YXRpYyIsInBvcnQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicmVxIiwicmVzIiwiYmVlciIsImZpbmQiLCJhYnYiLCJ3aXRoQnJld2VyaWVzIiwiZm9ybWF0Iiwib3JkZXIiLCJlcnIiLCJkYXRhIiwiZXJyb3IiLCJsaW1pdGVkRGF0YSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibGVuZ3RoIiwic2VuZCIsInN0eWxlSWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxNQUFNRixTQUFWO0FBQ0EsSUFBSUcsT0FBT0YsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJRyxTQUFTSCxRQUFRLGlCQUFSLENBQWI7QUFDQSxJQUFJSSxZQUFZSixRQUFRLGdCQUFSLENBQWhCO0FBQ0EsSUFBSUssU0FBUyxJQUFJRCxTQUFKLENBQWNELE9BQU9HLGFBQXJCLENBQWI7QUFDQSxJQUFJQyxPQUFPUCxRQUFRLE1BQVIsQ0FBWDtBQUNBQyxJQUFJTyxHQUFKLENBQVFULFFBQVFVLE1BQVIsQ0FBZSxRQUFmLENBQVI7QUFDQVIsSUFBSU8sR0FBSixDQUFRTixNQUFSOztBQUVBLElBQUlRLE9BQU8sSUFBWDs7QUFFQVQsSUFBSVUsTUFBSixDQUFXRCxJQUFYLEVBQWlCLFlBQVc7QUFDMUJFLFVBQVFDLEdBQVIsQ0FBWSx1QkFBdUJILElBQW5DO0FBQ0QsQ0FGRDs7QUFJQVQsSUFBSWEsR0FBSixDQUFRLE1BQVIsRUFBZ0JaLE1BQWhCLEVBQXdCLFVBQVNhLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN6Q1gsU0FBT1ksSUFBUCxDQUFZQyxJQUFaLENBQWlCLEVBQUVDLEtBQUssQ0FB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K0JDLFFBQVEsTUFBdkMsRUFBK0NDLE9BQU8sYUFBdEQsRUFBcUVVLFNBQVMsR0FBOUUsRUFBakIsRUFBc0csVUFBU1QsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ3hILFFBQUlELEdBQUosRUFBUztBQUNQWCxjQUFRYSxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRyxjQUFjLENBQUNGLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQUQsRUFBNkNOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQTdDLEVBQXlGTixLQUFLRyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBY0wsS0FBS00sTUFBN0IsQ0FBTCxDQUF6RixFQUFxSU4sS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWNMLEtBQUtNLE1BQTdCLENBQUwsQ0FBckksRUFBaUxOLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjTCxLQUFLTSxNQUE3QixDQUFMLENBQWpMLENBQWxCO0FBQ0FkLFVBQUllLElBQUosQ0FBU0wsV0FBVDtBQUNEO0FBQ0YsR0FQRDtBQVFELENBVEQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvY29uZmlnJyk7XG52YXIgQnJld2VyeURiID0gcmVxdWlyZSgnYnJld2VyeWRiLW5vZGUnKTtcbnZhciBicmV3ZGIgPSBuZXcgQnJld2VyeURiKGNvbmZpZy5CUkVXRVJZREJfS0VZKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuYXBwLnVzZShjb3JzKCkpO1xuXG52YXIgcG9ydCA9IDgwODA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAnICsgcG9ydCk7XG59KTtcblxuYXBwLmdldCgnL2FsbCcsIGNvcnMoKSwgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYnJld2RiLmJlZXIuZmluZCh7IGFidjogLTUsIHdpdGhCcmV3ZXJpZXM6ICdZJywgZm9ybWF0OiAnanNvbicsIG9yZGVyOiAnZGVzY3JpcHRpb24nIH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9BbWVyaWNhbklQQXMnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBicmV3ZGIuYmVlci5maW5kKHsgYWJ2OiAtNSwgd2l0aEJyZXdlcmllczogJ1knLCBmb3JtYXQ6ICdqc29uJywgb3JkZXI6ICdkZXNjcmlwdGlvbicsIHN0eWxlSWQ6IDMwIH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmFwcC5nZXQoJy9Eb3J0bXVuZGVyJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYnJld2RiLmJlZXIuZmluZCh7IGFidjogLTUsIHdpdGhCcmV3ZXJpZXM6ICdZJywgZm9ybWF0OiAnanNvbicsIG9yZGVyOiAnZGVzY3JpcHRpb24nLCBzdHlsZUlkOiA3OSB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW1pdGVkRGF0YSA9IFtkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXV07XG4gICAgICByZXMuc2VuZChsaW1pdGVkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvU2NvdGNoQWxlJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYnJld2RiLmJlZXIuZmluZCh7IGFidjogLTUsIHdpdGhCcmV3ZXJpZXM6ICdZJywgZm9ybWF0OiAnanNvbicsIG9yZGVyOiAnZGVzY3JpcHRpb24nLCBzdHlsZUlkOiAxNSB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW1pdGVkRGF0YSA9IFtkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXV07XG4gICAgICByZXMuc2VuZChsaW1pdGVkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvQmVsZ2lhbkZyZW5jaCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGJyZXdkYi5iZWVyLmZpbmQoeyBhYnY6IC01LCB3aXRoQnJld2VyaWVzOiAnWScsIGZvcm1hdDogJ2pzb24nLCBvcmRlcjogJ2Rlc2NyaXB0aW9uJywgc3R5bGVJZDogNjUgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGltaXRlZERhdGEgPSBbZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV1dO1xuICAgICAgcmVzLnNlbmQobGltaXRlZERhdGEpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuYXBwLmdldCgnL2NpZGVyJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYnJld2RiLmJlZXIuZmluZCh7IGFidjogLTUsIHdpdGhCcmV3ZXJpZXM6ICdZJywgZm9ybWF0OiAnanNvbicsIG9yZGVyOiAnZGVzY3JpcHRpb24nLCBzdHlsZUlkOiAxNTUgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGltaXRlZERhdGEgPSBbZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSpkYXRhLmxlbmd0aCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKmRhdGEubGVuZ3RoKV1dO1xuICAgICAgcmVzLnNlbmQobGltaXRlZERhdGEpO1xuICAgIH1cbiAgfSk7XG59KTsiXX0=