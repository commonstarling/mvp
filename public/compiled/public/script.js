'use strict';

$(document).ready(function () {

  var $form = $("#pick-beer");

  $form.on('change', function (e) {
    var element = $(this).find('option:selected');
    var query = element[0].value;
    if (query === '/all') {
      console.log('all beers requested');
      $.ajax({
        xhrFields: {
          withCredentials: true
        },
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'access-control-allow-headers': 'content-type, accept',
          'access-control-max-age': 10, // Seconds.
          'Content-Type': 'application/json'
        },
        crossDomain: true,
        type: "GET",
        contentType: 'text/plain',
        url: "https://api.brewerydb.com/v2/beers?key=2065166f991f554ba66c6c02263c9554&format=json&abv=-3&withBreweries=Y",
        dataType: 'json',
        success: function success(result) {
          console.log('we\'ve got data');
        },
        error: function error(e) {
          console.log(e);
        }
      });
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRmb3JtIiwib24iLCJlIiwiZWxlbWVudCIsImZpbmQiLCJxdWVyeSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiY3Jvc3NEb21haW4iLCJ0eXBlIiwiY29udGVudFR5cGUiLCJ1cmwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTVCLE1BQUlDLFFBQVFILEVBQUUsWUFBRixDQUFaOztBQUVBRyxRQUFNQyxFQUFOLENBQVMsUUFBVCxFQUFtQixVQUFTQyxDQUFULEVBQVc7QUFDNUIsUUFBSUMsVUFBVU4sRUFBRSxJQUFGLEVBQVFPLElBQVIsQ0FBYSxpQkFBYixDQUFkO0FBQ0EsUUFBSUMsUUFBUUYsUUFBUSxDQUFSLEVBQVdHLEtBQXZCO0FBQ0EsUUFBSUQsVUFBVSxNQUFkLEVBQXNCO0FBQ3BCRSxjQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQVgsUUFBRVksSUFBRixDQUFRO0FBQ05DLG1CQUFXO0FBQ1RDLDJCQUFpQjtBQURSLFNBREw7QUFJTkMsaUJBQVM7QUFDUCx5Q0FBK0IsR0FEeEI7QUFFUCwwQ0FBZ0MsaUNBRnpCO0FBR1AsMENBQWdDLHNCQUh6QjtBQUlQLG9DQUEwQixFQUpuQixFQUl1QjtBQUM5QiwwQkFBZ0I7QUFMVCxTQUpIO0FBV05DLHFCQUFhLElBWFA7QUFZTkMsY0FBTSxLQVpBO0FBYU5DLHFCQUFhLFlBYlA7QUFjTkMsYUFBSyw0R0FkQztBQWVOQyxrQkFBVSxNQWZKO0FBZ0JOQyxpQkFBUyxpQkFBVUMsTUFBVixFQUFrQjtBQUN2Qlosa0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILFNBbEJLO0FBbUJOWSxlQUFPLGVBQVVsQixDQUFWLEVBQWE7QUFDaEJLLGtCQUFRQyxHQUFSLENBQVlOLENBQVo7QUFDSDtBQXJCSyxPQUFSO0FBdUJEO0FBQ0YsR0E3QkQ7QUE4QkQsQ0FsQ0QiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIHZhciAkZm9ybSA9ICQoXCIjcGljay1iZWVyXCIpO1xuXG4gICRmb3JtLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcbiAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJyk7XG4gICAgdmFyIHF1ZXJ5ID0gZWxlbWVudFswXS52YWx1ZTtcbiAgICBpZiAocXVlcnkgPT09ICcvYWxsJykge1xuICAgICAgY29uc29sZS5sb2coJ2FsbCBiZWVycyByZXF1ZXN0ZWQnKTtcbiAgICAgICQuYWpheCgge1xuICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nOiAnKicsXG4gICAgICAgICAgJ2FjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHMnOiAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycsXG4gICAgICAgICAgJ2FjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnMnOiAnY29udGVudC10eXBlLCBhY2NlcHQnLFxuICAgICAgICAgICdhY2Nlc3MtY29udHJvbC1tYXgtYWdlJzogMTAsIC8vIFNlY29uZHMuXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgY29udGVudFR5cGU6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmJyZXdlcnlkYi5jb20vdjIvYmVlcnM/a2V5PTIwNjUxNjZmOTkxZjU1NGJhNjZjNmMwMjI2M2M5NTU0JmZvcm1hdD1qc29uJmFidj0tMyZ3aXRoQnJld2VyaWVzPVlcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlXFwndmUgZ290IGRhdGEnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pOyJdfQ==