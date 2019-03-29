/*
The exercise consists of going through the table and 
search for divisible values 
by 2 and then replace them with a multiple of 3.
*/

/* 
Initialization of a tab variable containing an array.
*/
var tab =[1,4,2,5,6,12,3];

/* 
Recovery of the length of the painting.
*/
var lg = tab.length;

/*
Use of a for loop to browse the value table.
*/

for (var i = 0; i < lg;) {
    /*
    The condition checks if the value in the ith position tab[i] in the table is divisible by 2.
    If the condition is checked, the value in the ith position tab[i]
    is updated with the value in ith position multiplied by 3.
    */
    if (tab[i] % 2 == 0 ){
        tab[i]= tab[i] * 3;
    }
    i++;
}
// Display of the table values
console.log(tab);
