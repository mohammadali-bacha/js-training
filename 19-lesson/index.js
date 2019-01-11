/*
Le but de l'exercice est de refaire l'exercice 19 (créer facture et ajouter lignes de facture).
*/

/*
on va initialiser notre facture
*/
const Facture = require('./facture');
const AdresseDeLivraison =  require('./adresse');
const LignesDeFacture = require('./lignesDeFacture');

var adresse = new AdresseDeLivraison(
    "18 rue de la République",
    69003,
    "Lyon",
);

var facture = new Facture(
    "achat de matériel",
    1809,
    "12/09/2018",
    100,
    adresse,
    3,
    10,
    0.2,
);

var ligne1 = new LignesDeFacture(
    5,
    20,
    0.2,
);


facture.ajouterLignes(ligne1);


var ligne2 = new LignesDeFacture(
    5,
    10,
    0.2,
);
facture.ajouterLignes(ligne2);

console.log(facture);
console.log(facture.ligne);





