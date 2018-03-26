var map;
function initMap() {
  // Instancie une nouvelle carte à partir de la classe MAP.
  // Le premier paramètre est le noeud du dom qui contiendra la carte,
  // le deuxième est le constructeur
  map = new google.maps.Map(document.getElementById('map'), {
    // Les coordonnées GPS de Créteil
    center: {lat: 48.7833, lng: 2.4667},
    zoom: 14
  });
}

ajaxGet(JCDecauxKey, function(reponse) {
 // Récupère les data JSON de l'API et les transforme en un tableau JavaScript
  var bike = JSON.parse(reponse);
  console.log(bike);

  bike.forEach(function(data) {
    // Création dynamique de marqueurs
    var marker = new google.maps.Marker({
    position: data.position,
    map: map,
    address: data.address
    });

    var nameElt = document.getElementById("name");
    var addressElt = document.getElementById("address");
    var bikesDispos = document.getElementById("dispo");
    var emptyPlaces = document.getElementById("empty");
    var statusElt = document.getElementById("status");
    // https://developers.google.com/maps/documentation/javascript/examples/event-simple?hl=fr
    marker.addListener("click", function() {
      nameElt.textContent = data.name;
      addressElt.textContent = data.address;
      bikesDispos.textContent = data.available_bikes;
      emptyPlaces.textContent = data.available_bike_stands;
      if (data.status === "OPEN") {
        statusElt.style.color = "green";
        statusElt.textContent = data.status;
      } else {
        statusElt.style.color = "red";
        statusElt.textContent = data.status;
      }
    })
  })

});
