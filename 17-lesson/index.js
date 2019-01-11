/*
Le but de l'exercie est de faire une fonction qui recherche la plus grande valeur d'un tableau.
*/

function rechercheDeLaPlusGrandeValeur(tableau) {
    var miseSurEtagere = tableau[0];
/*
on cree une boucle pour parcourir le tableau
*/
    for (var index = 0; index < tableau.length; index++) {
/*
la condition verifie que miseSurEtagere est plus petite que la valeur du tableau parcourue
au moment de la boucle et si c'est le cas, on la stocke jusqu'a trouver la plus grande jusqu'a la 
fin de la boucle
*/
        if (miseSurEtagere < tableau[index]) {
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
var tableau = [13,18,5,56,42];
// var tableau1 = [23,56,12,43,67,11]; // valeur de test
/*
On stocke le resultat de la fonction dans une variable...
*/
var resultat = rechercheDeLaPlusGrandeValeur(tableau);

/*
pour pouvoir l'afficher ensuite
*/
console.log("Voici la plus grande valeur : " + resultat);
