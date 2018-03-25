var map;
function initMap() {
  // Instancie une nouvelle carte à partir de la classe MAP.
  // Le premier paramètre est le noeud du dom qui contiendra la carte,
  // le deuxième est le constructeur
  map = new google.maps.Map(document.getElementById('map'), {
    // Les coordonnées GPS de Créteil
    center: {lat: 48.7833, lng: 2.4667},
    zoom: 13
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
    map: map
    });

    // https://developers.google.com/maps/documentation/javascript/examples/event-simple?hl=fr
    marker.addListener("click", function() {
      console.log("yo");
    })
  })

});
