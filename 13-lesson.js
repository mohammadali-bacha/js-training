/*
nous allons donc faire une fonction de recherche de la plus petite valeur par index
tableau = [21,56,87,34,52,12]

*/

var tableau = [21,56,87,34,52,12];

function rechercherLaPlusPetiteValeurParIndex(tableau) {
    var indexDeLaPlusPetiteValeur = 0;
    var miseSurEtagere = tableau[0];
    for (var index = 0; index < tableau.length; index++) {
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index];
            indexDeLaPlusPetiteValeur = index;

        }
    }
    return indexDeLaPlusPetiteValeur;
}

resultat = rechercherLaPlusPetiteValeurParIndex(tableau);

console.log(resultat);
