/*
Rechercher l'index d'une valeur dans le tableau en utilisant une boucle while  :
*/

console.log("Rechercher une valeur dans l'index : ");
var search = 9;
var arr0 = [4,8,9,0,2,5];
var i = 0;
var valide = true;
var j = null;

while (valide) {
    if (arr0[i] == search){
        valide = false;
    }
    i++;
}
/*

Lorsque la valeur recherchee dans la boucle est trouve
la valeur de l'index i est incremente en plus 
exemple:
si la valeur 9 a un index de 2 l'index passe a 3

*/
j = i - 1
console.log("L'index de la valeur recherchee est : " + j);

// console.log(arr0);
