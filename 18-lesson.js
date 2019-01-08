/*
Le but de l'exercice est de remplacer toutes les valeurs divisibles par 2, en leur ajoutant +1.

// fonction de Recherche 
// stocker la valeur temporaire
*/

function valeursDivisiblePar2(tableau){
for (var index = 0; index < tableau.length; index++) { 
    /*
    dans cette condition, on verifie qu'il ny a pas de reste a la division du nombre parcouru
    dans le tableau par 2 et si c'est le cas...
    */
    if (tableau[index] % 2 == 0) {
        /*
        la valeur du tableau est egale a celle-ci plus 1 
        */
        tableau[index] = tableau[index]+1;      
    }
}
/*
On retourne la valeur car nous sommes dans une fonction
*/
return tableau;
}

/*
On initialise les variables
*/
// var tableau = [23,67,43,98,21,13]; valeur de test
// var tableau = [2,4,6,8,10,21]; 2eme valeur de test
var tableau = [12,34,56,0,78,90,21];


console.log(tableau);
/*
On stocke la fonction dans une variable...
*/
var resultat = valeursDivisiblePar2(tableau);
/*
pour pouvoir ensuite l'afficher.
*/
console.log(resultat);

