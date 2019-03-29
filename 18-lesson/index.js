/*
The purpose of the exercise is to replace all divisible values with 2, adding +1.

// Search function 
// store the temporary value
*/

function valuesDivisiblePer2(array){ 
    for (var index = 0; index < array.length; index++) { 
        /*
        in this condition, it is verified that there is no remainder of the division of the number travelled
        in the array by 2 and if so...
        */
        if (array[index] % 2 == 0) {
            /*
            the value of the array is equal to this one plus 1 
            */
            array[index] = array[index]+1;      
        }
    }
    /*
    We return the value because we are in a function
    */
    return array;
    }
    
    /*
    We initialize the variables
    */
    // var array =[23,67,43,43,98,21,13]; test value
    // var array =[2,4,6,6,8,10,21]; 2nd test value
    var array =[12,34,56,56,0,78,90,21];
    
    
    console.log(array);
    /*
    The function is stored in a variable....
    */
    var result = valuesDivisiblePer2(array);
    /*
    so that you can then display it.
    */
    console.log(result);
    
    