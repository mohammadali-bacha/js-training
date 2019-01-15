/*
Le but de l'exercice est de refaire une fonction qui va stocker dans un tableau tous les mots .
*/

function dictionnaireDeMots(dictionnaire) {
   var  tableau = [];
   var mot = " ";
    for (var index = 0; index < dictionnaire.length; index++) {
        if (dictionnaire[index] != " ") {
            mot += dictionnaire[index];
            console.log(mot);
            
        } else{
            tableau.push(mot);
            mot = "";
        }
    }      
    tableau.push(mot);

    return tableau;
}

var dictionnaire = "les voitures roulent";

var resultat = dictionnaireDeMots(dictionnaire);

console.log(resultat);


// resultat souhaite : [ 'les', 'voitures', 'roulent' ]
