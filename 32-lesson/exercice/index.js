const Tableau = require('./tableau');
const Ligne = require('./ligne');
const Cellule = require('./cellule');


var ligne = new Ligne(
    "hello"
);

var cellule = new Cellule();

var tableau = new Tableau(
    ligne,
    cellule
    );
    
tableau.ajouterLignes(3);

console.log(tableau);
