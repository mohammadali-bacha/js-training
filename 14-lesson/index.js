/*
Le but de l'exercice est de faire une fonction retournant le résultat de l'addition  de toutes les  valeurs d'un tableau.
*/


function addition(tableau) {
    var somme = 0;
for (var index = 0; index < tableau.length; index++) {
/*
dans cette boucle qui parcourt le tableau, on stocke la valeur du tableau parcourue au moment de la boucle à chaque itération
*/
    somme = tableau[index] + somme;    
}
/*
On retourne la valeur car nous sommes dans une fonction
*/
return somme;

}
/*
On initialise les variables
*/
var tableau = [12,34,56,78,90];
/*
On stocke la fonction dans une variable...
*/
resultat = addition(tableau);
/*
pour pouvoir ensuite l'afficher.
*/
console.log(resultat);



