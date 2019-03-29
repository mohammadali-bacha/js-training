/*
The exercise consists in searching for the smallest value in a array
*/
/* 
Variable initialization of an array
*/

// uncomment to test the algorithm with other values:
var array =[25,47,32,32,18,56]; 
var overShelving = array[0];
/* 
Recovery of the length of the painting
*/
var length = array.length;

/*
Using a for loop to browse the value array  
*/
for (var index = 0; index <= length; index++) {
    if (overShelving > array[index]) {
        overShelving = array[index]
    }
    /*
    The condition checks if the value in ith array position[index] 
    in the array is smaller than the index+1 positon which is length
    If the condition is checked, the value in the ith array position[index] is checked
    is stored in the OnShelf variable and the length variable is increased.
    */
    /*
    Otherwise, the ith array position[index] is saved in the variable OverShelve.
        */
    // }
}
// Display of the array values

console.log(array);
// Display of the smallest value in the array

console.log("The smallest value is "+ overShelving +".");
