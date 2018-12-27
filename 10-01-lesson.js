/*
Trier une suite de nombres a l'aide de la methode du tri a selection 
Exemple :
 var arr = [3,4,6,2,1,7,5,8]
 arr[0] => 3
Rechercher la valeur plus petite que 3  
arr[0] => 3 exclue
la valeur plus petite = 1
Le principe du tri a selection est de prendre la 1ere valeur (3), index[0] = 


La fonction de tri comporte 2 sous-fonctions ,
    -rechercher la plus petite valeur
    -echanger la position de la plus petite valeur avec la valeur courante :
    [3,9,2,4,5,6,7,8]
     -   -       
     0   2
     on echange les positions  0 et 2
     on va donc developper une fonction qui va nous permettre de rechercher la plus petite valeur en nous renvoyant la position de cette valeur 
     contenue dans le tableau
     Dans cette fonction, on va rajouter la possibilite de definir le point de depart de cette recherche :
     [12,45,87,90,10,40]
    la plus petite valeur a partir de 90 est la valeur 10.
*/

function rechercherLaPlusPetiteValeurParIndex(tableau, position){
    var miseSurEtagere = tableau[position];
    var indexMisSurEtagere = position;
    /* 
    Recuperation de la longeur du tableau
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
        La condition verifie si la valeur en ieme position tableau[index] 
        dans le tableau est plus petite que la positon index+1 qui est longueur
        Si la condition est verifiée la valeur en ieme position tableau[index]
        est enregistree dans la variable miseSurEtagere et la variable longueur est incrementee.
        Sinon l'ieme position tableau[index] est enregistree dans la variable miseSurEtagere.
            */
    }
    // Affichage de la valeur la plus petite du tableau
    
    return indexMisSurEtagere;
}

tableau = [23,56,78,93,21,43,90]
var longueur = tableau.length;
var valeurPositionInitiale = null;
var valeurPositionFinale = null;
var indexDeLaPlusPetiteValeur = 0;

for (var index = 0; index < longueur; index++) {
    console.log(tableau);
    
    valeurPositionInitiale = tableau[index];

    console.log("valeurPositionInitiale: " + valeurPositionInitiale);
    
    console.log("index : " + index);

    indexDeLaPlusPetiteValeur = rechercherLaPlusPetiteValeurParIndex(tableau, index);
    console.log("indexDeLaPlusPetiteValeur: " + indexDeLaPlusPetiteValeur);
    
    valeurPositionFinale = tableau[indexDeLaPlusPetiteValeur];
    console.log("valeurPositionFinale : " + valeurPositionFinale);
    
    tableau[indexDeLaPlusPetiteValeur] = valeurPositionInitiale;
    console.log("tableau[indexDeLaPlusPetiteValeur] :" + tableau[indexDeLaPlusPetiteValeur]);
    
    tableau[index] = valeurPositionFinale;
    console.log("tableau[index] :" + tableau[index]);

    console.log("tableau: " + tableau);

    console.log("*********************");
    
}
console.log(tableau);



