/*
Le but de l'exercice est de faire une fonction qui va stocker dans un tableau tous les mots .
*/

function stockerLesMots(compteRendu) {

    // var miseSurEtagere = phrase1[0];

    var miseSurEtagere = [];

    for (var index = 0; index < compteRendu.length; index++) {

        if (compteRendu[index] != " ") {

            // console.log(miseSurEtagere);

            // console.log(index);
            
            // miseSurEtagere[index] =  phrase1[index]; 

            miseSurEtagere.push(compteRendu[index]); // pourquoi sa affiche les mêmes valeurs mais ce n'est pas la meme presentation que la ligne commentée ci-dessus ?

        }
    }
    return miseSurEtagere;
}

// var phrase = ["les chats mangent"];

var compteRendu = "les chats mangent";

var resultat = stockerLesMots(compteRendu);

// console.log("-----------------------");

console.log(resultat);


