/*
Manipuler le tableau :
- Changer une valeur contenue dans un index
- Ajouter un élément à l'index du tableau
- Supprimer un élément contenu dans l'index du tableau.
*/

/*
Modifier la valeur contenue dans l'index 3
*/
console.log("Modifier une valeur de l'index :");
var arr0 = [4,8,9,0,2];
console.log(arr0)

arr0[3] = 1000;
console.log(arr0);

console.log('----------');

/*
Ajouter la valeur a l'index 3 
*/
console.log("Ajouter une valeur de l'index :");
var arr1 = [4,8,9,0,2];
console.log(arr1)

arr1.splice(3,0,1000)
console.log(arr1);
console.log('----------');

/*
Supprimer la valeur contenue dans l'index 1
*/
console.log("Supprimer une valeur de l'index :");
var arr2 = [4,8,9,0,2];
console.log(arr2)

arr2.splice(0,1)
console.log(arr2);
