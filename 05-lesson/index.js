/*
L'exercice consiste à trouver l'index d'une valeur recherchée dans le tableau.
*/

/* 
Initialisation d'une variable tab contenant un tableau
*/
var tab = [1,4,2,5,6,12,3];

/* 
Récupération de la longeur du tableau
*/
var lg = tab.length;

/* 
Rechercher l'index de la valeur 12
*/
var search = 12;

/*
On souhaite stocker le résultat de la valeur recherchée.
*/
var result = null;

for (var index = 0; index < lg; index++ ) {

    if (tab[index] == search){
     result = index;
    }
}
console.log(result);

