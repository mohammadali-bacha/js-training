/*
The exercise consists of going through the table 
and search for values divisible by 2 
then replace them with 0.
*/

/* 
Initialization of a variable in an array
*/
var tab =[1,4,2,2,5,5,6,6,12,3];

/* 
Recovery of the length of the array
*/
var lg = tab.length;

/*
Using a for loop to browse the value table  
*/

for (var i = 0; i < lg;) {
    /*
    The condition checks if the value in the ith position tab[i] 
    in the table is divisible by 2.
    If the condition is checked, the value in the ith position tab[i]
    is updated with the value 0.
    */
    if (tab[i] % 2 == 0 ){
        tab[i] = 0;
    }
    i++;
}
// Display of the table values
console.log(tab);

