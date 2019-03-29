/*
we will therefore make a search function of the smallest value by index
array =[21,56,87,87,34,52,12]
*/

var array =[21,56,87,34,52,12];

function searchSmallestValuePerIndex(array) {
/*
The index variablesLaPlusSmallestValue are initialized and placed on the shelf is assigned to the 1st value of the array
*/
    var indexOfSmallestValue = 0;
    var overShelving = array[0];
    for (var index = 0; index < array.length; index++) {
/*
In this condition, if the overlay shelf is greater than the value at the time of the loop path in the array, then the overlay shelf is
equal to this value until it is the smallest....
*/
        if (overShelving > array[index]) {
/*
and the index of this value is stored in the SmallestLowestValue Index.
*/
            overShelving = array[index];
            indexOfSmallestValue = index;

        }
    }
    return indexOfSmallestValue;
}
/*
The function is stored in a variable....
*/
result = searchSmallestValuePerIndex(array);

/*
so that you can then display it.
*/
console.log(result);

