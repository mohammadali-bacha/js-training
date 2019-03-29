/*
The purpose of the exercise is to make a function that will store all the words in a array.
*/

function dictionaryWords(report) {
    var word ="";
    var dictionary = [];


    for (var index = 0; index < reportReport.length; index++) {
        var letter = report[index];
  
        if(letter !=""){
            word = word + letter;

        }else{

            dictionary.push(word);  
            word = '';
        }
        
    }
    console.log("last word");
    dictionary.push(word);  
    console.log(word)
    return dictionary;
}


varReport = "cats eat mouses";

var result = dictionaryWords(report);

console.log(result);
