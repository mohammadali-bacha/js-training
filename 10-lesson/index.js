function myFirstFunction(arg1){
    var result = arg1 + 1
    return result;
}

/*
This variable stores the result of the function
*/
var result0 = myFirstFunction(8);
console.log(result0);


function searchTheSmallestValue(array){
    var overShelving = array[0];
    /* 
    Recovery of the length of the painting
    */
    var length = array.length;
    
    /*
    Using a for loop to browse the value array  
    */
    for (var index = 0; index <= length; index++) {
        if (overShelving > array[index]) {
            overShelving = array[index]
        }
        /*
        The condition checks if the value in ith array position[index] 
        in the array is smaller than the index+1 positon which is length
        If the condition is checked, the value in ith array position[index]
        is stored in the OnShelf variable and the length variable is incremented.
        */
        /*
        Otherwise, the ith array position[index] is saved in the variable OverShelve.
            */
        // }
    }
    // Display of the array values
    
    console.log(array);
    // Display of the smallest value in the array
    
    return overShelving;
};

var array = [23,46,12];
var result1 = searchTheSmallestValue(array);


console.log("The smallest value is " + result1 +".");



function searchTheSmallestValuePerIndex(array, position){
    var overShelving = array[0];
    var indexSurSurEtagere = position;
    /* 
    Recovery of the length of the painting
    */
    var length = array.length;
    
    /*
    Using a for loop to browse the value array  
    */
    for (var index = position; index <= length; index++) {
        if (overShelving > array[index]) {
            overShelving = array[index];
            indexOverShelving = index;
        }
        /*
        The condition checks if the value in ith array position[index] 
        in the array is smaller than the index+1 positon which is length
        If the condition is checked, the value in the ith array position[index] is checked
        is stored in the OnShelf variable and the length variable is incremented.
        */
        /*
        Otherwise, the ith array position[index] is saved in the variable OverShelve.
            */
        // }
    }
    // Display of the array values
    
    console.log(array);
    // Display of the smallest value in the array
    
    return indexOverShelving;
}


var array1 =[23,46,12,34,68,98,21,59]
var result2 = searchTheSmallestValuePerIndex(array1, 1);


console.log("The smallest value per index is " + result2 +".");


/*--------------------------------
this variable stores the function
---------------------------------*/


/*
var fx = myFirstFunction;

console.log(fx(5));

*/
