/*
Rechercher la plus petite valeur dans un tableau
*/

var arr = [3, 4, 6, 2, 1, 7, 5, 8];
var k = null;
var l = 1;

var lg = arr.length;
arr.length = lg;

for (var index = 0; index < lg; index++){
    if (arr[index] < arr[l]) {
        k = arr[index];
        l++;
    } else{
        k = arr[l];
    }
}

console.log(arr);
console.log("La valeur la plus petite est " + k + ".");
