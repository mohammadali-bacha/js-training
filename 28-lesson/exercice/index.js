/*
Le but de l'exercice est d'enregistrer des livres dans un objet bibliothèque.
*/

const Biblio = require('./bibliotheque');
const Livres = require('./livres');

var bibliotheque = new Biblio();

var livre0 = new Livres(
    "Elon Musk",
    "Ashlee Vance",
    1234,
    "biographie",
);

bibliotheque.ajouterLivres(livre0);

var livre1 = new Livres(
    "Zero to One",
    "Peter Thiel",
    5678,
    "startup"
);

bibliotheque.ajouterLivres(livre1);

console.log(bibliotheque);
