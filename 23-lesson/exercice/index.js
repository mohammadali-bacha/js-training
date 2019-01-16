/*
Le but de l'exercice est de prendre un texte et compter le nombre de fois que je trouve la lettre sélectionée
ex : "le chat mange la souris" => combien de fois y-a t-il la lettre l ?
*/


function nombreDeFoisLettre(texte) {
    var compte = null;
    for (var index = 0; index < texte.length; index++) {
        if (texte[index] == lettreRecherchee ){
           nombreDeFois = index; 
            compte++;
           console.log("nombreDeFois"+nombreDeFois);           
        }
    }
    return compte; 
}

var texte = "le chat mange la souris"; 

var lettreRecherchee = "c";

var nombreDeFois = 0; // doit être égal à 2 à la fin

var resultat = nombreDeFoisLettre(texte);

console.log(resultat);
