/*
Le but de l'exercice est de faire une fonction qui va stocker dans un tableau tous les mots .
*/

function dictionnaireDeMots(compteRendu) {
    var mot = "";
    var dictionnaire = [];


    for (var index = 0; index < compteRendu.length; index++) {
        var lettre = compteRendu[index];
  
        if(lettre != " "){
            mot = mot + lettre;

        }else{

            dictionnaire.push(mot);  
            mot = '';
        }
        
    }
    console.log("dernier mot");
    dictionnaire.push(mot);  
    console.log(mot)
    return dictionnaire;
}


var compteRendu = "les chats mangent";

var resultat = dictionnaireDeMots(compteRendu);

console.log(resultat);


