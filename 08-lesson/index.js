/*
L'exercice consiste a rechercher la plus petite valeur dans un tableau avec une boucle while
*/
/* 
Initialisation variable d'un tableau
*/
var tableau = [3, 4, 6, 2, 1, 7, 5, 8];

// dé-commenter pour tester l'algorithme avec d'autres valeurs :
// var tableau = [25,47,32,18,56]; 
var miseSurEtagere = tableau[0];
/* 
Recuperation de la longeur du tableau
*/
var longueur = tableau.length;
var index = 0; 
var valide = true; 
/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/

/*
Pour que la boucle while fonctionne, il faut declarer  la variable index en dehors de la condition, 
et sortir de la condition l'incrementation de index  et l'integrer dans la boucle.
*/
while (valide){
    /*
    Cette condition peremt de verifier la sortie 
    du tableau : 
    si  0 >= 7 la condition n'est pas verifiee donc la boucle continue
    si  1 >= 7 la condition n'est pas verifiee donc la boucle continue
    ...
    si  7 >= 7 la condition est  verifiee donc la boucle s'arrete
    */
    if ( index >= longueur){
        valide = false; 
    }

    
    if (miseSurEtagere > tableau[index]){
        miseSurEtagere = tableau[index]
    }
    
            /*
    La condition verifie si la valeur en ieme position tableau[index] 
    dans le tableau est plus petite que la positon index+1 qui est l
    Si la condition est verifiée la valeur en ieme position tableau[index]
    est enregistree dans la variable k et la variable l est incrementee.
    */
        /*
    Sinon l'ieme position tableau[l] est enregistree dans la variable k.
        */
    // }
    index++;
}
// Affichage des valeurs du tableau

console.log(tableau);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + miseSurEtagere + ".");
