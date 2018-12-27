function maPremiereFonction(arg1){
    var resultat = arg1 + 1
    return  resultat;
}

/*
cette variable stocke le resultat de la fonction
*/
var resultat0 = maPremiereFonction(8);
console.log(resultat0);



function rechercherLaPlusPetiteValeur(tableau){
    var miseSurEtagere = tableau[0];
    /* 
    Recuperation de la longeur du tableau
    */
    var longueur = tableau.length;
    
    /*
    Utilisation d'une boucle for pour parcourir le tableau de valeur  
    */
    for (var index = 0; index <= longueur; index++) {
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index]
        }
        /*
        La condition verifie si la valeur en ieme position tableau[index] 
        dans le tableau est plus petite que la positon index+1 qui est longueur
        Si la condition est verifiée la valeur en ieme position tableau[index]
        est enregistree dans la variable miseSurEtagere et la variable longueur est incrementee.
        */
        /*
        Sinon l'ieme position tableau[index] est enregistree dans la variable miseSurEtagere.
            */
        // }
    }
    // Affichage des valeurs du tableau
    
    console.log(tableau);
    // Affichage de la valeur la plus petite du tableau
    
    return miseSurEtagere;
}

var tableau = [23,46,12]
var resultat1 = rechercherLaPlusPetiteValeur(tableau);


console.log("La valeur la plus petite est " + resultat1 + ".");






function rechercherLaPlusPetiteValeurParIndex(tableau, position){
    var miseSurEtagere = tableau[0];
    var indexMisSurEtagere = position;
    /* 
    Recuperation de la longeur du tableau
    */
    var longueur = tableau.length;
    
    /*
    Utilisation d'une boucle for pour parcourir le tableau de valeur  
    */
    for (var index = position; index <= longueur; index++) {
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index];
            indexMisSurEtagere = index;
        }
        /*
        La condition verifie si la valeur en ieme position tableau[index] 
        dans le tableau est plus petite que la positon index+1 qui est longueur
        Si la condition est verifiée la valeur en ieme position tableau[index]
        est enregistree dans la variable miseSurEtagere et la variable longueur est incrementee.
        */
        /*
        Sinon l'ieme position tableau[index] est enregistree dans la variable miseSurEtagere.
            */
        // }
    }
    // Affichage des valeurs du tableau
    
    console.log(tableau);
    // Affichage de la valeur la plus petite du tableau
    
    return indexMisSurEtagere;
}


var tableau1 = [23,46,12, 34,68,98,21,59]
var resultat2 = rechercherLaPlusPetiteValeurParIndex(tableau1, 1);


console.log("La valeur la plus petite par index est " + resultat2 + ".");








/*--------------------------------
cette variable stocke  la fonction
---------------------------------*/


/*
var fx = maPremiereFonction;

console.log(fx(5));

*/