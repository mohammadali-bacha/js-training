/*
The exercise consists in finding the index of a searched value in the table.
*/

/* 
Initialization of a tab variable containing an array
*/
var tab =[1,4,2,2,5,5,6,6,12,3];

/* 
Recovery of the length of the painting
*/
var lg = tab.length;

/* 
Search for the index of the value 12
*/
var search = 12;

/*
We want to store the result of the desired value.
*/
var result = null;

for (var index = 0; index < lg; index++) {

    if (tab[index] == search){
     result = index;
    }
}
console.log(result);

