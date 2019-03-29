/*
Sort a sequence of numbers using the selection sorting method 
Example :
 var array =[3,4,6,6,2,2,1,7,5,8]
 array[0] => 3
Search for the value smaller than 3 by excluding it from the search the smaller value will be 1.
The principle of selection sorting is to exchange the value positions the one in the current position with the smallest one
value.


The sorting function has 2 sub-functions,
    -search for the smallest value
    -exchange the position of the smallest value with the current value:
    [3,9,2,4,5,6,7,8]
     - -       
     0 2
     positions 0 and 2 are exchanged
     we will therefore develop a function that will allow us to search for the smallest value by returning the position of this value 
     contained in the array.
     In this function, we will add the possibility to define the starting point of this search:
     [12,45,87,90,10,40]
    the lowest value from 90 is 10.
*/


 function searchTheSmallestValuePerIndex(array, position){ 
    var overShelving = array[position];
    var indexOverShelving = position;
    /* 
    Recovery of the length of the painting
    */
    var length = array.length;
    
    /*
    Using a for loop to browse the value array  
    */
    for (var index = position; index < length; index++) {
        if (overShelving > array[index]) {
            overShelving = array[index];
            indexOverShelving = index;
        }
        /*
        The condition checks if the value in ith array position[index] 
        in the array is smaller than the value placed on the shelf
        if the condition is verified, the values are exchanged and stored in a variable
        temporary index of the value placed on the shelf in indexOverShelve
        */

    }

    
    return indexOverShelving;
}


array =[23,56,78,93,21,43,90]
var length = array.length;
var PositionInitialValue = null;
var PositionFinalValue = null;
var indexOfTheSmallestValue = 0;


for (var index = 0; index < length; index++) {
    
    console.log("array:" + array);

    console.log("index :" + index);
    PositionInitialValue = array[index];
    console.log("PositionInitialValue:" + PositionInitialValue);


    indexOfTheSmallestValue = searchTheSmallestValuePerIndex(array, index);
    console.log("SmallestValueOfIndex:" + indexOfTheSmallestValue);
    
    PositionFinalValue = array[indexOfTheSmallestValue];
    console.log("valuePositionFinalValue:" + PositionFinalValue);
    
    array[indexOfTheSmallestValue] = PositionInitialValue;    
    array[index] = PositionFinalValue;


    console.log("****************************************************");
      
}
console.log(array);
