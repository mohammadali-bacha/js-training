/*
2nd try and catch exercise: the goal is to return exceptions 
*/


function enterNumber(number) {
    try {
        var message = "this is the number you entered:" + number;
        if (number <= 1) {
            throw "n must be greater than 1 and smaller than 10";
        }
        if (number >= 10) {
            throw "Enter a number between 1 and 10"

        }
        if (isNaN(number)) {
            throw "Please enter a number";
        }
    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}

var result = enterNumber(100);


//////////////////////version switch case break


// function enterChoice(number) {
// try {
// var message = "this is the number you entered:" + number;
// switch(number){
// case number <= 1 :
// throw "n must be greater than 1 and smaller than n";
// break;
// case number >= number :
// throw "Enter a number between 1 and n"
// break;
// box isNaN(number) :
// throw "Please enter a number"
// }
// } catch (error) {
// message = error;
// } finally {
// console.log(message);       
// }
// }

// var result = enterChoice(0);