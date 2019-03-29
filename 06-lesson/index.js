/*
Manipulate the table:
- Changing a value contained in an index
- Add an element to the index of the table
- Delete an element contained in the index from the table.
*/

/*
Modify the value contained in index 3
*/
console.log("Modify an index value:");
var arr0 =[4,8,9,0,2];
console.log(arr0)

arr0[3] = 1000;
console.log(arr0);

console.log('--------------');

/*
Add value to index 3 
*/
console.log("Add an index value:");
var arr1 =[4,8,9,0,2];
console.log(arr1)

arr1.splice(3,0,1000)
console.log(arr1);
console.log('--------------');

/*
Delete the value contained in index 1
*/
console.log("Delete a value from the index:");
var arr2 =[4,8,9,0,2];
console.log(arr2)

arr2.splice(0,1)
console.log(arr2);

