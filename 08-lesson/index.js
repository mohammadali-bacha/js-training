/*
L'exercice consiste à rechercher la plus petite valeur dans un tableau avec une boucle while.
*/

/* 
Initialisation variable d'un tableau
*/
var tableau = [3, 4, 6, 2, 1, 7, 5, 8];

// dé-commenter pour tester l'algorithme avec d'autres valeurs :
// var tableau = [25,47,32,18,56]; 

var miseSurEtagere = tableau[0];

/* 
Récupération de la longeur du tableau
*/
var longueur = tableau.length;
var index = 0; 
var valide = true; 
/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/

/*
Pour que la boucle while fonctionne, il faut déclarer la variable index en dehors de la condition, 
et sortir de la condition l'incrémentation de index  et l'intégrer dans la boucle.
*/
while (valide){
    /*
    Cette condition peremt de vérifier la sortie du tableau : 
    si  0 >= 7 la condition n'est pas verifiée donc la boucle continue
    si  1 >= 7 la condition n'est pas verifiée donc la boucle continue
    ...
    si  7 >= 7 la condition est  vérifiée donc la boucle s'arrête
    */
    if ( index >= longueur){
        valide = false; 
    }

    
    if (miseSurEtagere > tableau[index]){
        miseSurEtagere = tableau[index]
    }
    
            /*
    La condition vérifie si la valeur en ième position tableau[index] 
    dans le tableau est plus petite que la positon index+1 qui est l
    Si la condition est verifiée la valeur en ième position tableau[index]
    est enregistrée dans la variable k et la variable l est incrementée.
    */
        /*
    Sinon l'ième position tableau[l] est enregistrée dans la variable k.
        */
    // }
    index++;
}
// Affichage des valeurs du tableau

console.log(tableau);
// Affichage de la valeur la plus petite du tableau

console.log("La valeur la plus petite est " + miseSurEtagere + ".");
