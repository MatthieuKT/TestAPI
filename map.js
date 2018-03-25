console.log("yo");

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 48.7833, lng: 2.4667},
      zoom: 12
    });
  }
