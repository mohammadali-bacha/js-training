/*
Le but de l'exercice est de regrouper les nombres de même valeurs d'un tableau dans un autre tableau en les additionnant.
*/

function regrouperLesNombresDeMemeValeur(tableau) {
    var tableauDeMemeValeurs = [];
    var valeur = null;
/*
on crée une boucle pour parcourir le tableau
*/
    for (var indexValeur = 0; indexValeur < tableau.length; indexValeur++) {
/*
on initialise les variables 
*/
        var valeur = tableau[indexValeur];
        var cumul = 0;
        var nombreDeFoisTrouve = 0;
/*
dans cette 2ème boucle, nous allons chercher dans le tableau si 
*/
        for (var indexRecherche = indexValeur; indexRecherche < tableau.length; indexRecherche++) {
/*
dans cette condition, si la valeur contenue dans le tableau est égale à la valeur parcourue dans le tableau alors
cumul est égale à celle-ci à chaque fois et on ajoute un compteur pour stocker dans nombreDeFoisTrouve combien de fois cette valeur apparait...
*/
            if (valeur == tableau[indexRecherche]) {
                cumul = cumul + valeur;
                nombreDeFoisTrouve = nombreDeFoisTrouve + 1;
            }

        }
/*
...pour ensuite ajouter la condition que si cette valeur est plus grande que 1, alors cumul à le droit d'être ajoutée dans le tableau de sortie,
c'est pour éviter que dans le tableau de sortie, il y ait les valeurs uniques du tableau d'entrée
*/
        if (nombreDeFoisTrouve > 1) {
            tableauDeMemeValeurs.push(cumul); 
        }
    }
/*

*/
    return tableauDeMemeValeurs;
}

/*
On initialise les variables
*/
var tableau = [100, 200, 300, 100, 50, 50];
/*
On stocke la fonction dans une variable...
*/
var resultat = regrouperLesNombresDeMemeValeur(tableau);
/*
pour pouvoir ensuite l'afficher.
*/
console.log(resultat);
