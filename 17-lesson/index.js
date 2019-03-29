/*
The purpose of the exercise is to make a function that looks for the highest value of a painting.
*/

function searchLargestValue(array) {
    var overShelving = array[0];
/*
we create a loop to browse the array
*/
    for (var index = 0; index < array.length; index++) {
/*
the condition verifies that the staging is smaller than the value of the array being scanned
at the time of the loop and if this is the case, it is stored until the largest one is found until the 
end of the loop
*/
        if (overShelving < array[index]) {
            overShelving = array[index];
        }
    }
/*
We return the value 
*/
    return overShelving;
}

/*
We initialize the array variable
*/
var array =[13,18,5,5,56,42];
// var array1 =[23,56,12,12,43,67,11]; // test value
/*
The result of the function is stored in a variable....
*/
var result = searchLargestValue(array);

/*
so that it can be displayed later
*/
console.log("This is the highest value:" + result);
