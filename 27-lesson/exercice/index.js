/*
Le but de l'exercice est de vérifier le taux de lymphocites et retourner un message  selon le cas.
*/

const priseDeSang = require('./verifierTxDeLymphocites')

var txDeLymphocites = 1.5;

var resultat = priseDeSang(txDeLymphocites);

console.log(resultat);


