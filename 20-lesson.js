/*
Le but de l'exercice est de faire une fonction qui va stocker dans un tableau tous les mots .
*/

function stockerLesMots(phrase1) {
    var miseSurEtagere = [];

    for (var index = 0; index < phrase1.length; index++) {

        if (phrase1[index] != " ") {

            // miseSurEtagere[index] =  phrase1[index]; 

            miseSurEtagere.push(phrase1[index]); // pourquoi sa affiche les memes valeurs mais ce n'est pas la meme presentation que la ligne commentée ci-dessus ?

        }
    }
    return miseSurEtagere;
}

// var phrase = ["les chats mangent"];

var phrase1 = "les chats mangent";


var resultat = stockerLesMots(phrase1);

// console.log("-----------------------");

console.log(resultat);


