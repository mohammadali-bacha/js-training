
/*
Trier une suite de nombres à l'aide de la méthode du tri à selection 
Exemple :
 var tableau = [3,4,6,2,1,7,5,8]
 tableau[0] => 3
Rechercher la valeur plus petite que 3 en l'excluant de la recherche la valeur plus petite sera 1.
Le principe du tri à selection est d'échanger les positions de valeurs celle en  position courante avec la plus petite
valeur.


La fonction de tri comporte 2 sous-fonctions ,
    -rechercher la plus petite valeur
    -échanger la position de la plus petite valeur avec la valeur courante :
    [3,9,2,4,5,6,7,8]
     -   -       
     0   2
     on échange les positions  0 et 2
     on va donc développer une fonction qui va nous permettre de rechercher la plus petite valeur en nous renvoyant la position de cette valeur 
     contenue dans le tableau.
     Dans cette fonction, on va rajouter la possibilité de définir le point de départ de cette recherche :
     [12,45,87,90,10,40]
    la plus petite valeur a partir de 90 est la valeur 10.
*/

function rechercherLaPlusPetiteValeurParIndex(tableau, position){ 
    var miseSurEtagere = tableau[position];
    var indexMisSurEtagere = position;
    /* 
    Récupération de la longeur du tableau
    */
    var longueur = tableau.length;
    
    /*
    Utilisation d'une boucle for pour parcourir le tableau de valeur  
    */
    for (var index = position; index < longueur; index++) {
        if (miseSurEtagere > tableau[index]) {
            miseSurEtagere = tableau[index];
            indexMisSurEtagere = index;
        }
        /*
        La condition vérifie si la valeur en ième position tableau[index] 
        dans le tableau est plus petite que la valeur mise sur l'étagère
        si la condition est vérifiée on échange les valeurs et on stocke dans une variable
        temporaire index de la valeur mise sur l'etagere dans indexMisSurEtagere
        */

    }

    
    return indexMisSurEtagere;
}

tableau = [23,56,78,93,21,43,90]
var longueur = tableau.length;
var valeurPositionInitiale = null;
var valeurPositionFinale = null;
var indexDeLaPlusPetiteValeur = 0;


for (var index = 0; index < longueur; index++) {
    
    console.log("tableau: " + tableau);

    console.log("index : " + index);
    valeurPositionInitiale = tableau[index];
    console.log("valeurPositionInitiale: " + valeurPositionInitiale);


    indexDeLaPlusPetiteValeur = rechercherLaPlusPetiteValeurParIndex(tableau, index);
    console.log("indexDeLaPlusPetiteValeur: " + indexDeLaPlusPetiteValeur);
    
    valeurPositionFinale = tableau[indexDeLaPlusPetiteValeur];
    console.log("valeurPositionFinale : " + valeurPositionFinale);
    
    tableau[indexDeLaPlusPetiteValeur] = valeurPositionInitiale;    
    tableau[index] = valeurPositionFinale;


    console.log("*********************");
    
    
    
}
console.log(tableau);
