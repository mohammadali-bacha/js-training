/*
Search the index of a value in the array using a while loop :
*/

console.log("Search for a value in the index:");
var search = 9;
var arr0 =[4,8,9,9,0,0,2,5];
var i = 0;
var valid = true;
var j = null;

while (valid) {
    if (arr0[i] == search){
        valid = false;
        // i+++; never stops
    }
    i++;
    console.log(i);   
}

/*
When the value searched in the loop is found the value of index i is increased
example:
if the value 9 to an index of 2 the index changes to 3
*/

j = i - 1
console.log("The index of the searched value is:" + j);

// console.log(arr0);
