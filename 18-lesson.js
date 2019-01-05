/*
Remplacer toutes les valeurs divisibles par 2, leur ajouter +1.
// verifier qu'il ny a pas de reste
// fonction de Recherche 
// stocker la valeur temporaire
*/

function valeursDivisiblePar2(tableau){
    // var miseSurEtagere = tableau[index];
for (var index = 0; index < tableau.length; index++) {    
    if (tableau[index] % 2 == 0) {
        tableau[index] = tableau[index]+1;      
    }
}
return tableau;
}

// var tableau = [23,67,43,98,21,13];
var tableau = [2,4,6,8,10,21];
console.log(tableau);

var resultat = valeursDivisiblePar2(tableau);

console.log(resultat);
