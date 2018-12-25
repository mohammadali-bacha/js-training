/*
L'exercice consiste a rechercher la plus petite valeur dans un tableau
*/

/* 
Initialisation variable d'un tableau
*/
var tableau = [3, 4, 6, 2, 7, 5, 8];


/*
  
  La premiere valeur est une valeur de reference
  donc je vais mettre sur mon etagere la valeur 3 
  avant de rechercher la plus petite valeur

*/
var miseSurEtagere = tableau[0];

/* 
Recuperation de la longeur du tableau
*/
var longueur = tableau.length;


/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/
for (var index = 0; index < longueur; index++){


    /*
      Je vais comparer la valeur sur l'etagere avec la valeur situé 
      en ieme position du tableau (tableau[index])
      Si la valeur en ieme position du tableau (tableau[index]) est inferieur 
      à la valeur de l'etagere je la remplace avec la valeur en ieme position 
      du tableau
    */

   if (tableau[index] <= miseSurEtagere){

        miseSurEtagere = tableau[index];

   }

}
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + miseSurEtagere + ".");
