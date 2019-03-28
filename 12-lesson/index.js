/*
Le but de l'exercice est de rechercher la plus petite valeur à partir d'un tabeleau
[23,56,98,43,67,11,3]
*/

function rechercherLaPlusPetiteValeur(tableau) {
    /*
    on initialise la variable 
    */
    var miseSurEtagere = tableau[0];
    /*
    Une boucle pour parcourir le tableau :
    */
    for (var index = 0; index < tableau.length; index++) {
        console.log("tableau" + tableau[index]);
    /*
        Dans cette condition, si miseSurEtagere est plus grande que la valeur au moment du parcours de la boucle dans le tableau, alors miseSurEtagere est
        égale à cette valeur jusqu'à que ce soit la plus petite
    */
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index];
        }
    }
/*
On retourne la valeur 
*/
    return miseSurEtagere;
}

/*
On initialise la variable tableau
*/

var tableau = [23,56,12,43,67,11];

/*
On stocke le résultat de la fonction dans une variable...
*/
resultat = rechercherLaPlusPetiteValeur(tableau);

/*
pour pouvoir l'afficher ensuite
*/
console.log(resultat); 