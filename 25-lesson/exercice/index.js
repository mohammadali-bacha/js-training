/*
Le programme ci-desous convertit une valeur en euros en dollars selon le taux de change spécifié.
*/

const conversion = require('./conversion');

var resultat = conversion(250,1.14);

console.log(resultat);
