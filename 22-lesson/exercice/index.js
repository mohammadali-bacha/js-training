/*
L'objectif de l'exercie est de rajouter un mot à un texte.
*/

function ajouterMotTexte(mot, texte) {
    var nouveauTexte = texte + " " + mot ;
    return nouveauTexte;
}

var mot = "chat";

var texte = "les souris mangent le";

var resultat = ajouterMotTexte(mot,texte);

console.log(resultat);
