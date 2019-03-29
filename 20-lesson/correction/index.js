/*
The purpose of the exercise is to redo a function that will store all the words in a array.
*/

function WordsDictionary(dictionary) {
    var array = [];
    var word ="";
     for (var index = 0; index < dictionary.length; index++) {
         if (dictionary[index] !="") {
             word += dictionary[index];
             console.log(word);
             
         } else{ 
             array.push(word);
             word ="";
         }
     }      
     array.push(word);
 
     return array;
 }
 
 var dictionary = "cars drive";
 
 var result = WordsDictionary(dictionary);
 
 console.log(result);
 
 
 // desired result: "The',''cars',''cars',''roll''.
 