/*
The purpose of the exercise is to search for the smallest value from a array
[23,56,98,43,67,11,3]
*/

function searchTheSmallestValue(array) {
    /*
    we initialize the variable 
    */
    var overShelving = array[0];
    /*
    A loop to go through the array:
    */
    for (var index = 0; index < array.length; index++) {
        console.log("array" + array[index]);
    /*
        In this condition, if the overlay shelf is greater than the value at the time of the loop path in the array, then the overlay shelf is
        equal to this value until it is the smallest
    */
        if (overShelving > array[index]) {
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

var array =[23,56,12,43,67,11];

/*
The result of the function is stored in a variable....
*/
result = searchTheSmallestValue(array);

/*
so that it can be displayed later
*/
console.log(result); 