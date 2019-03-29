/*
The exercise consists in searching for the smallest value in an array with a while loop.
*/

/* 
Variable initialization of an array
*/
var array =[3, 4, 6, 2, 1, 7, 5, 8];

// uncomment to test the algorithm with other values:
// var array =[25,47,32,32,18,56]; 

var overShelving = array[0];

/* 
Recovery of the length of the painting
*/
var length = array.length;
var index = 0; 
var valid = true; 
/*
Using a for loop to browse the value array  
*/

/*
For the while loop to work, the index variable must be declared outside the condition, 
and remove the index incrementation from the condition and integrate it into the loop.
*/
while (valid){
    /*
    This condition allows to check the output of the array: 
    if 0 >= 7 the condition is not checked so the loop continues
    if 1 >= 7 the condition is not checked so the loop continues
    ...
    if 7 >= 7 the condition is checked so the loop stops
    */
    if ( index >= length){
        valid = false; 
    }

    
    if (overShelving > array[index]){
        overShelving = array[index]
    }
    
            /*
    The condition checks if the value in ith array position[index] 
    in the array is smaller than the index+1 position which is the
    If the condition is checked, the value in ith array position[index]
    is stored in the k variable and the variable is incremented.
    */
        /*
    Otherwise the ith array position[l] is stored in the variable k.
        */
    // }
    index++;
}
// Display of the array values

console.log(array);
// Display of the smallest value in the array

console.log("The smallest value is "+ overShelving +".");

