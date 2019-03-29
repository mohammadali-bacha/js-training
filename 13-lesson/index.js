/*
we will therefore make a search function of the smallest value by index
table =[21,56,87,87,34,52,12]
*/

var table =[21,56,87,87,34,52,12];

function searchSmallestValuePerIndex(table) {
/*
The index variablesLaPlusSmallestValue are initialized and placed on the shelf is assigned to the 1st value of the array
*/
    var indexOfSmallestValue = 0;
    var overShelving = table[0];
    for (var index = 0; index < table.length; index++) {
/*
In this condition, if the overlay shelf is greater than the value at the time of the loop path in the array, then the overlay shelf is
equal to this value until it is the smallest....
*/
        if (overShelving > table[index]) {
/*
and the index of this value is stored in the SmallestLowestValue Index.
*/
            overShelving = table[index];
            indexOfSmallestValue = index;

        }
    }
    return indexOfSmallestValue;
}
/*
The function is stored in a variable....
*/
result = searchLowestSmallestValuePerIndex(table);

/*
so that you can then display it.
*/
console.log(result);

