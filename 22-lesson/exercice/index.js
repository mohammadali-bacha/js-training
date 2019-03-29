/*
The objective of the exercise is to add a word to a text.
*/

function addWordText(word, text)  {
    var newText = text +" " + word ;
    return newText;
}

var word = "cat";

var text = "mouses eat it";

var result =  addWordText(word,text);

console.log(result);
