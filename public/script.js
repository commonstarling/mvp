$(document).ready(function () {

  var $form = $("#pick-beer");

  $form.on('change', function(e){
    var element = $(this).find('option:selected');
    var query = element[0].value;
    if (query === '/all') {
      console.log('all beers requested');
      $.ajax( {
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
        success: function (result) {
            console.log('we\'ve got data');
        },
        error: function (e) {
            console.log(e);
        }
      });
    }
  });
});