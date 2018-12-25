/*
L'exercice consiste a rechercher la plus petite valeur dans un tableau
*/
/* 
Initialisation variable d'un tableau
*/
var arr = [3, 4, 6, 2, 1, 7, 5, 8];
var k = null;
var l = 1;
/* 
Recuperation de la longeur du tableau
*/
var lg = arr.length;
arr.length = lg;

/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/
for (var index = 0; index < lg; index++){
    if (arr[index] < arr[l]) {
            /*
    La condition verifie si la valeur en ieme position arr[index] 
    dans le tableau est plus petite que la positon index+1 qui est l
    Si la condition est verifiée la valeur en ieme position arr[index]
    est enregistree dans la variable k et la variable l est incrementee.
    */
        k = arr[index];
        l++;
    } else{
        /*
    Sinon l'ieme position arr[l] est enregistree dans la variable k.
        */
        k = arr[l];
    }
    // arr = [25,47,32,18,56]; test pour verifier si l'algorithme fonctionne avec un autre tableau et des valeurs differentes: (dé-commenter pour tester)
}
// Affichage des valeurs du tableau

console.log(arr);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + k + ".");

1ere k=null
mise sur etagere
 
comparaison inferieur ou = 