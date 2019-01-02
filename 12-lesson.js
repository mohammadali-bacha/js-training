/*
Le but de l'exercice est de faire une fonction retournant le resultat de l'addition  de toutes les  valeurs d'un tableau.
*/


var tableau = [12,34,56,78,90];
// la somme de ce tableau est de 270.
var miseSurEtagere = tableau[0];
var somme = null;
var longueur = tableau.length;

function addition(tableau) {
   for (var index = 1 ; index < longueur; index++) {
       console.log("index : " + index);    
        miseSurEtagere = tableau[index];
        console.log("miseSurEtagere : " + miseSurEtagere);  
        console.log("valeur du tableau"+tableau[index]);           
        somme = tableau[index] + miseSurEtagere;
        return console.log("La somme est de " + somme);; 
    }
}

var tableau1 = [23,46,12,34];          
// la somme de ce tableau est de 115.
var sum = addition(tableau1);

console.log("La somme du tableau 1 est de : " + sum);
