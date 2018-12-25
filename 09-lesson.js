/*
Trier une suite de nombres a l'aide de la methode du tri a selection 
Exemple :
 var arr = [3,4,6,2,1,7,5,8]
 arr[0] => 3
Rechercher la valeur plus petite que 3  
arr[0] => 3 exclue
la valeur plus petite = 1
Le principe du tri a selection est de prendre la 1ere valeur (3), index[0] = 
*/

// brouillon :

var arr = [3, 4, 6, 2, 1, 7, 5, 8];
var n = null;
var n0 = null;
var n1 = 1;
var arr1 = []; 

var lg = arr.length;
arr.length = lg;

for (var index = 0; index < lg; index++) {

    if (n > n1) {
        arr[n] = arr[n0];
        arr[n1] = arr[index];
        n++;
        n1++;
    } else{

    }
}
console.log(arr);
console.log(arr1);
