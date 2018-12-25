/*
L'exercice consiste a trouver l'index d'une valeur recherchee dans le  tableau 
*/

/* 
Initialisation variable d'un tableau
*/
var tab = [1,4,2,5,6,12,3];

/* 
Recuperation de la longeur du tableau
*/
var lg = tab.length;

/* 
Rechercher l'index de la valeur 12
*/
var search = 12;
/*
On souhaite stocker le resultat de la valeur recherchee
*/
var result = null;

for (var index = 0; index < lg; index++ ) {

    if (tab[index] == search){
     result = index;
    }
}
console.log(result);

