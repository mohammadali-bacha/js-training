/*
Le but de l'exercice est de faire une fonction qui va stocker dans un tableau tous les mots.
*/

function stockerLesMots(phrase1) {
    for (var index = 0; index < phrase1.length; index++) {

        var miseSurEtagere = [];

        console.log(index);

        if (phrase1[index] != " ") {

            // console.log(index);

            // console.log(phrase1[index]);

            miseSurEtagere[index] =  phrase1[index]; 

            console.log(miseSurEtagere);
        }
    }
    return miseSurEtagere;
}

// var phrase = ["les chats mangent"];

var phrase1 = "les chats mangent";


var resultat = stockerLesMots(phrase1);

console.log("-----------------------");

console.log(resultat);


