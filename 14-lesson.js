/*
Le but de l'exercice est de faire une fonction retournant le resultat de l'addition  de toutes les  valeurs d'un tableau.
*/

var tableau = [12,34,56,78,90];

function addition(tableau) {
    var somme = 0;
for (var index = 0; index < tableau.length; index++) {
    somme = tableau[index] + somme;    
}

return somme;

}

resultat = addition(tableau);

console.log(resultat);






 
//    for (var index = 1 ; index < tableau.length; index++) {
//        console.log(tableau);    
//        console.log("index : " + index);    
//         miseSurEtagere = tableau[index];
//         console.log("miseSurEtagere : " + miseSurEtagere);  
//         // console.log("valeur du tableau :" + tableau[index]);           
//         somme = tableau[index] + miseSurEtagere;
//         index1++;
//         console.log("la somme pendant la boucle est de : "+ somme); 
//     }
//     return somme;
// }

// var tableau1 = [23,46,12,34];          
// // la somme de ce tableau est de 115.
// var sum0 = addition(tableau);
// console.log("---------------------------------");

// var sum1 = addition(tableau1);

// console.log("La somme du tableau 0 est de : " + sum0);
// console.log("---------------------------------");
// console.log("La somme du tableau 1 est de : " + sum1);



