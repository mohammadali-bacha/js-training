/*
L'exercice consiste à rechercher la plus petite valeur dans un tableau
*/
/* 
Initialisation variable d'un tableau
*/

// dé-commenter pour tester l'algorithme avec d'autres valeurs :
var tableau = [25,47,32,18,56]; 
var miseSurEtagere = tableau[0];
/* 
Récuperation de la longeur du tableau
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
    La condition vérifie si la valeur en ième position tableau[index] 
    dans le tableau est plus petite que la positon index+1 qui est longueur
    Si la condition est vérifiée la valeur en ième position tableau[index]
    est enregistrée dans la variable miseSurEtagere et la variable longueur est incrementée.
    */
    /*
    Sinon l'ième position tableau[index] est enregistrée dans la variable miseSurEtagere.
        */
    // }
}
// Affichage des valeurs du tableau

console.log(tableau);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + miseSurEtagere + ".");