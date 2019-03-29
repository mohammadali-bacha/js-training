/*
The purpose of the exercise is to take a text and count the number of times I find the selected letter
ex: "the cat eats the mouse" => how many times is there the letter l?
*/

function numberOFtimesLetter(text,requestedLetter) {
    var account = null;
    for (var index = 0; index < text.length; index++) {
        if (text[index] == requestedLetter ){
           numberOFTimes = index; 
            account++;
        }
    }
    return account; 
}

var text = "the cat eats the mouse"; 

var requestedLetter ="u";

var numberOfTimes = 0; // must be equal to 2 at the end

var result = numberOFtimesLetter(text,requestedLetter);

console.log(result);
