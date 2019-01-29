const Tableau = require('./tableau');
const Ligne = require('./ligne');

var ligneA = new Ligne();
var ligneB = new Ligne();

var tableau = new Tableau(
);

tableau.ajouterLigne(ligneA);
tableau.ajouterLigne(ligneB);

console.log(tableau.lignes[1]);


//4eme cellule de la ligne 2

console.log(tableau.lignes[1].cellules[3]);
