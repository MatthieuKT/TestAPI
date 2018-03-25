var map;
function initMap() {
  // Instancie une nouvelle carte à partir de la classe MAP.
  // Le premier paramètre est le noeud du dom qui contiendra la carte,
  // le deuxième est le constructeur
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.7833, lng: 2.4667},
    zoom: 13
  });
}

ajaxGet(JCDecauxKey, function(reponse) {
 // Récupère les data JSON de l'API et les transforme en un tableau JavaScript
  var bike = JSON.parse(reponse);
  console.log(bike);
});
