/*
Le but de l'exercice est de refaire l'exercice 19 (créer facture et ajouter lignes de facture).
*/

/*
on va initialiser notre facture
*/

/*
dans les const ci-dessous, on importe les autres classes  
(contenues dans les différents fichiers du dossier actuel) avec require :
*/

/*
on déclare les variables : 
*/
const Facture = require('./facture');
const AdresseDeLivraison =  require('./adresse');
const LigneDeFacture = require('./ligneDeFacture');

/*
on instancie les variables : 
*/
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

var ligne1 = new LigneDeFacture(
    5,
    20,
    0.2,
);

/*
on ajoute une ligne (ligne1) dans le tableau via l'appel de la méthode ajouterLignes : 
*/
facture.ajouterLignes(ligne1);

var ligne2 = new LigneDeFacture(
    20000,
    10,
    0.2,
);
facture.ajouterLignes(ligne2);

var ligne3 = new LigneDeFacture(
    4,
    3,
    0.2,
);
facture.ajouterLignes(ligne3);

var ligne4 = new LigneDeFacture(
    10,
    33,
    0.2,
);

facture.ajouterLignes(ligne4);
/*
on affiche le tout :
*/
console.log(facture);
console.log("facture.ligne : "+ facture.nombreDeLignes);
facture.toto = 10;




