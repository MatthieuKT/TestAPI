
// Fonction de récupération de données depuis l'url donnée
function ajaxGet (url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  // Ajout d'un événement lié à la connexion
  req.addEventListener("load", function() {
    if(req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else { // Gère l'eventuelle erreur liée à une URL invalide
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  // Si il y a vraiment une erreur de connexion
  req.addEventListener("error", function() {
    console.error("Erreur réseau à l'URL " + url);
  });
  // récupération des données
  req.send(null);
}
