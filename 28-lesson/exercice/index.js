/*
Le but de l'exercice est d'enregistrer des livres dans une bibliothèque.
*/

const Bibliotheque = require('./bibliotheque');
const Livre = require('./livre');

var bibliotheque = new Bibliotheque();

var biographieElonMusk = new Livre(
    "Elon Musk",
    "Ashlee Vance",
    1234,
    "biographie",
);

bibliotheque.ajouterLivre(biographieElonMusk);

var biographiePeterThiel = new Livre(
    "Zero to One",
    "Peter Thiel",
    5678,
    "startup"
);

bibliotheque.ajouterLivre(biographiePeterThiel);

// var resultats = bibliotheque.rechercherLivreParTitre("Zero to One");

var resultats = bibliotheque.rechercherLivreParCodeBarre(1234);

console.log(resultats);

