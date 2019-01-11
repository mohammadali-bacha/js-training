/*
nous allons donc faire une fonction de recherche de la plus petite valeur par index
tableau = [21,56,87,34,52,12]
*/

var tableau = [21,56,87,34,52,12];

function rechercherLaPlusPetiteValeurParIndex(tableau) {
/*
On initialise les variables indexDeLaPlusPetiteValeur et miseSurEtagere est assignee a la 1ere valeur du tableau
*/
    var indexDeLaPlusPetiteValeur = 0;
    var miseSurEtagere = tableau[0];
    for (var index = 0; index < tableau.length; index++) {
/*
Dans cette condition, si miseSurEtagere est plus grande que la valeur au moment du parcours de la boucle dans le tableau, alors miseSurEtagere est
egale a cette valeur jusqu'a que ce soit la plus petite...
*/
        if (miseSurEtagere > tableau[index]) {
/*
et l'on stocke l'index de cette valeur dans indexDeLaPlusPetiteValeur.
*/
            miseSurEtagere = tableau[index];
            indexDeLaPlusPetiteValeur = index;

        }
    }
    return indexDeLaPlusPetiteValeur;
}
/*
On stocke la fonction dans une variable...
*/
resultat = rechercherLaPlusPetiteValeurParIndex(tableau);

/*
pour pouvoir ensuite l'afficher.
*/
console.log(resultat);

