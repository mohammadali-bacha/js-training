/*
Le but de l'exercice est de rechercher la plus petite valeur a partir d'un tabeleau
[23,56,98,43,67,11,3]

*/


function rechercherLaPlusPetiteValeur(tableau) {
    var miseSurEtagere = tableau[0];
    
    for (var index = 0; index < tableau.length; index++) {
        console.log("tableau" + tableau[index]);
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index];
        }
    }
    return miseSurEtagere;
}


var tableau = [23,56,12,43,67,11];

resultat = rechercherLaPlusPetiteValeur(tableau);

console.log(resultat);



