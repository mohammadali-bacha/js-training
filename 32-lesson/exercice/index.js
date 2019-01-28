const Tableau = require('./tableau');
const Ligne = require('./ligne');

var ligne = new Ligne();

var tableau = new Tableau(
    ligne,
);

ligne.ajouterCellules();
tableau.ajouterLignes(3);

console.log(ligne);

console.log(tableau);