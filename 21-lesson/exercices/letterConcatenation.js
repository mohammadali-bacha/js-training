/*
The purpose of the exercise is to make a function that will return a word by 
concatenating contained letters in a table.
*/

/*
In this function, we scroll through the letter table using a for loop and at each path,
the value traveled is concatenated with the previous one to form the word.

*/

function word(letters) {

    var word = [];

    for (var index = 0; index < letters.length; index++) {
        word += letters[index];        
    } 
    return word;
}

var letters0 = ["m", "o", "r", "n", "i", "n", "g"]

var letters1 = ["h", "e", "l", "l", "o"];

var letters = letters0;

var result = word(letters);

console.log(result);
