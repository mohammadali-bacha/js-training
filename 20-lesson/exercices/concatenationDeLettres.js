/*
Le but de l'exercice est de faire une fonction qui va retourner un mot en concaténant des lettres contenues
dans un tableau.
*/

/*
Dans cette fonction, nous parcourons le tableau de lettres aà l'aide d'une boucle for et à chaque parcourt,
la valeur parcourure est concaténée avec la précédente pour ainis former le mot.

*/

// module.exports = 

function mot(lettres) {

    var mot = [];

    for (var index = 0; index < lettres.length; index++) {
        mot += lettres[index];        
    } 
    return mot;
}

var lettres0 = ["b","o","n","j","o","u","r"];

var lettres1 = ["s","a","l","u","t"];

var lettres = lettres0;

var resultat = mot(lettres);

console.log(resultat);
