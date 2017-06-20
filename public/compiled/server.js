'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('2065166f991f554ba66c6c02263c9554');
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
      var limitedData = [data[Math.ceil(Math.random() * 50)], data[Math.ceil(Math.random() * 50)], data[Math.ceil(Math.random() * 50)], data[Math.ceil(Math.random() * 50)], data[Math.ceil(Math.random() * 50)]];
      res.send(limitedData);
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsImNvcnMiLCJCcmV3ZXJ5RGIiLCJicmV3ZGIiLCJwYXRoIiwidXNlIiwic3RhdGljIiwicG9ydCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJyZXEiLCJyZXMiLCJiZWVyIiwiZmluZCIsImFidiIsIndpdGhCcmV3ZXJpZXMiLCJmb3JtYXQiLCJvcmRlciIsImVyciIsImRhdGEiLCJlcnJvciIsImxpbWl0ZWREYXRhIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJzZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsTUFBTUYsU0FBVjtBQUNBLElBQUlHLE9BQU9GLFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUcsWUFBWUgsUUFBUSxnQkFBUixDQUFoQjtBQUNBLElBQUlJLFNBQVMsSUFBSUQsU0FBSixDQUFjLGtDQUFkLENBQWI7QUFDQSxJQUFJRSxPQUFPTCxRQUFRLE1BQVIsQ0FBWDtBQUNBQyxJQUFJSyxHQUFKLENBQVFQLFFBQVFRLE1BQVIsQ0FBZSxRQUFmLENBQVI7QUFDQU4sSUFBSUssR0FBSixDQUFRSixNQUFSOztBQUVBLElBQUlNLE9BQU8sSUFBWDs7QUFFQVAsSUFBSVEsTUFBSixDQUFXRCxJQUFYLEVBQWlCLFlBQVc7QUFDMUJFLFVBQVFDLEdBQVIsQ0FBWSx1QkFBdUJILElBQW5DO0FBQ0QsQ0FGRDs7QUFJQVAsSUFBSVcsR0FBSixDQUFRLE1BQVIsRUFBZ0JWLE1BQWhCLEVBQXdCLFVBQVNXLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN6Q1YsU0FBT1csSUFBUCxDQUFZQyxJQUFaLENBQWlCLEVBQUVDLEtBQUssQ0FBQyxDQUFSLEVBQVdDLGVBQWUsR0FBMUIsRUFBK0JDLFFBQVEsTUFBdkMsRUFBK0NDLE9BQU8sYUFBdEQsRUFBakIsRUFBd0YsVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQzFHLFFBQUlELEdBQUosRUFBUztBQUNQWCxjQUFRYSxLQUFSLENBQWNGLEdBQWQ7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJRyxjQUFjLENBQUNGLEtBQUtHLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFjLEVBQXhCLENBQUwsQ0FBRCxFQUFvQ0wsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWMsRUFBeEIsQ0FBTCxDQUFwQyxFQUF1RUwsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWMsRUFBeEIsQ0FBTCxDQUF2RSxFQUEwR0wsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWMsRUFBeEIsQ0FBTCxDQUExRyxFQUE2SUwsS0FBS0csS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWMsRUFBeEIsQ0FBTCxDQUE3SSxDQUFsQjtBQUNBYixVQUFJYyxJQUFKLENBQVNKLFdBQVQ7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xudmFyIEJyZXdlcnlEYiA9IHJlcXVpcmUoJ2JyZXdlcnlkYi1ub2RlJyk7XG52YXIgYnJld2RiID0gbmV3IEJyZXdlcnlEYignMjA2NTE2NmY5OTFmNTU0YmE2NmM2YzAyMjYzYzk1NTQnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuYXBwLnVzZShjb3JzKCkpO1xuXG52YXIgcG9ydCA9IDgwODA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAnICsgcG9ydCk7XG59KTtcblxuYXBwLmdldCgnL2FsbCcsIGNvcnMoKSwgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYnJld2RiLmJlZXIuZmluZCh7IGFidjogLTUsIHdpdGhCcmV3ZXJpZXM6ICdZJywgZm9ybWF0OiAnanNvbicsIG9yZGVyOiAnZGVzY3JpcHRpb24nIH0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbWl0ZWREYXRhID0gW2RhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNTApXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSo1MCldLCBkYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpKjUwKV0sIGRhdGFbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNTApXSwgZGF0YVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSo1MCldXTtcbiAgICAgIHJlcy5zZW5kKGxpbWl0ZWREYXRhKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=