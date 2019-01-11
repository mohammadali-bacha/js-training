/*
Le but de l'exercice est de regrouper les nombres de meme valeurs d'un tableau dans un autre tableau en les additionnant.
*/

function regrouperLesNombresDeMemeValeur(tableau) {
    var tableauDeMemeValeurs = [];
    var valeur = null;
/*
on cree une boucle pour parcourir le tableau
*/
    for (var indexValeur = 0; indexValeur < tableau.length; indexValeur++) {
/*
on initialise les variables 
*/
        var valeur = tableau[indexValeur];
        var cumul = 0;
        var nombreDeFoisTrouve = 0;
/*
dans cette 2eme boucle, nous allons chercher dans le tableau si 
*/
        for (var indexRecherche = indexValeur; indexRecherche < tableau.length; indexRecherche++) {
/*
dans cette condition, si la valeur contenue dans le tableau est egale a la valeur parcourue dans le tableau alors
cumul est egale a celle-ci a chaque fois et on ajoute un compteur pour stocker dans nombreDeFoisTrouve combien de fois cette valeur apparait...
*/
            if (valeur == tableau[indexRecherche]) {
                cumul = cumul + valeur;
                nombreDeFoisTrouve = nombreDeFoisTrouve + 1;
            }

        }
/*
...pour ensuite ajouter la condition que si cette valeur est plus grande que 1, alors cumul a le droit d'etre ajoutee dans le tableau de sortie,
c'est pour eviter que dans le tableau de sortie, il y ait les valeurs uniques du tableau d'entree
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
