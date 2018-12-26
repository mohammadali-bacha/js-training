/*
L'exercice consiste a rechercher la plus petite valeur dans un tableau avec une boucle while
*/
/* 
Initialisation variable d'un tableau
*/
var tableau = [3, 4, 6, 2, 1, 7, 5, 8];

// dé-commenter pour tester l'algorithme avec d'autres valeurs :
// var tableau = [25,47,32,18,56]; 
var mise_sur_etagere = tableau[0];
var compteur = 1;
/* 
Recuperation de la longeur du tableau
*/
var longueur = tableau.length;
tableau.length = longueur;
var index = 0; 
/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/

/*
Pour que la boucle while fonctionne, il faut declarer  la variable index en dehors de la condition, 
et sortir de la condition l'incrementation de index  et l'integrer dans la boucle.
*/
while (index <= longueur){
    if (mise_sur_etagere > tableau[index]){
        mise_sur_etagere = tableau[index]
    }
    // if (tableau[index] < tableau[compteur]) {
            /*
    La condition verifie si la valeur en ieme position arr[index] 
    dans le tableau est plus petite que la positon index+1 qui est l
    Si la condition est verifiée la valeur en ieme position arr[index]
    est enregistree dans la variable k et la variable l est incrementee.
    */
        /*
    Sinon l'ieme position arr[l] est enregistree dans la variable k.
        */
    // }
    index++;
}
// Affichage des valeurs du tableau

console.log(tableau);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + mise_sur_etagere + ".");
