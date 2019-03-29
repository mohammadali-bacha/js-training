/*
The exercise consists in finding the index of a searched value in the arrayle.
*/

/* 
Initialization of a array variable containing an array
*/
var array =[1,4,2,5,6,12,3];;

/* 
Recovery of the length of the painting
*/
var lg = array.length;

/* 
Search for the index of the value 12
*/
var search = 12;

/*
We want to store the result of the desired value.
*/
var result = null;

for (var index = 0; index < lg; index++) {

    if (array[index] == search){
     result = index;
    }
}
console.log(result);

