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
        // i++;  ne s'arrête jamais
    }
    i++;
    console.log(i);   
}

/*
Lorsque la valeur recherchée dans la boucle est trouvée la valeur de l'index i est incrementé
exemple:
si la valeur 9 à un index de 2 l'index passe à 3
*/

j = i - 1
console.log("L'index de la valeur recherchee est : " + j);

// console.log(arr0);
