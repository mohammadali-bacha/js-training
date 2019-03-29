/*
The purpose of the exercise is to make a function that returns the result 
of adding all the values in an array.
*/

function addition(array) {
    var sum = 0;
for (var index = 0; index < array.length; index++) {
/*
in this loop that runs through the array, the value of the array run at the time of the loop is stored at each iteration
*/
    sum = array[index] + sum;    
}
/*
We return the value because we are in a function
*/
return sum;

}
/*
We initialize the variables
*/
var array =[12,34,56,56,78,90];
/*
The function is stored in a variable....
*/
result = addition (array);
/*
so that you can then display it.
*/
console.log(result);



