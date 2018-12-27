/*
L'exercice consiste a rechercher la plus petite valeur dans un tableau
*/
/* 
Initialisation variable d'un tableau
*/

// dé-commenter pour tester l'algorithme avec d'autres valeurs :
var tableau = [25,47,32,18,56]; 
var miseSurEtagere = tableau[0];
/* 
Recuperation de la longeur du tableau
*/
var longueur = tableau.length;

/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/
for (var index = 0; index <= longueur; index++) {
    if (miseSurEtagere > tableau[index]) {
        miseSurEtagere = tableau[index]
    }
    /*
    La condition verifie si la valeur en ieme position tableau[index] 
    dans le tableau est plus petite que la positon index+1 qui est longueur
    Si la condition est verifiée la valeur en ieme position tableau[index]
    est enregistree dans la variable miseSurEtagere et la variable longueur est incrementee.
    */
    /*
    Sinon l'ieme position tableau[index] est enregistree dans la variable miseSurEtagere.
        */
    // }
}
// Affichage des valeurs du tableau

console.log(tableau);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + miseSurEtagere + ".");