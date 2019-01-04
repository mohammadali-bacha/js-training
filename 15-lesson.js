/*
Le but de l'exercice est de regrouper les nombres de meme valeurs d'un tableau dans un autre tableau en les additionnant.
*/

function regrouperLesNombresDeMemeValeur(tableau) {
    var tableauDeMemeValeurs = [];
    var valeur = null;

    for (var indexValeur = 0; indexValeur < tableau.length; indexValeur++) {
        var valeur = tableau[indexValeur];
        var cumul = 0;
        var nombreDeFoisTrouve = 0;
        for (var indexRecherche = indexValeur; indexRecherche < tableau.length; indexRecherche++) {
            if (valeur == tableau[indexRecherche]) {
                cumul = cumul + valeur;
                nombreDeFoisTrouve = nombreDeFoisTrouve + 1;
            }

        }
        if (nombreDeFoisTrouve > 1) {
            tableauDeMemeValeurs.push(cumul); 
        }
    }

    return tableauDeMemeValeurs;
}


var tableau = [100, 200, 300, 100, 50, 50];

var resultat = regrouperLesNombresDeMemeValeur(tableau);

console.log(resultat);
