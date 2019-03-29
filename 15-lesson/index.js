/*e
The purpose of the exercise is to group the numbers of the same values from one array 
into another array by adding them together.
*/

function groupTheSameValueNumbers(array) {
    var arrayOfSameValues = [];
    var value = null;
/*
we create a loop to browse the array
*/
    for (var indexValue = 0; indexValue < array.length; indexValue++) {
/*
we initialize the variables 
*/
        var value = array[indexValue];
        var cumulative  = 0;
        var numberOfTimesFound = 0;
/*
in this 2nd loop, we will look in the array to see if 
*/
        for (var indexResearch = indexValue; indexResearch < array.length; indexResearch++) {
/*
in this condition, if the value contained in the array is equal to the value traveled in the array then
cumulation is equal to this one each time and a counter is added to store in numberFromTimeFind how many times this value appears....
*/
            if (value == array[indexResearch]) {
                cumulative = cumulative + value;
                numberOfTimesFound = numberOfTimesFound + 1;
            }

        }
/*
...and then add the condition that if this value is greater than 1, then cumulates the right to be added in the output array,
it is to avoid that in the output array, there are the unique values of the input array
*/
        if (numberOfTimesFound > 1) {
            arrayOfSameValues.push(cumulative); 
        }
    }
/*

*/
    return arrayOfSameValues;
}

/*
We initialize the variables
*/
var array =[100, 200, 300, 100, 50, 50];
/*
The function is stored in a variable....
*/
var result = groupTheSameValueNumbers(array);
/*
so that you can then display it.
*/
console.log(result);
