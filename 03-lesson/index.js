/*
L'exercice consiste à parcourir le tableau 
et rechercher les valeurs divisibles par 2 
puis les remplacer par 0.
*/

/* 
Initialisation d'une variable d'un tableau
*/
var tab = [1,4,2,5,6,12,3];

/* 
Récupération de la longeur du tableau
*/
var lg = tab.length;

/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/

for (var i = 0; i < lg;) {
    /*
    La condition vérifie si la valeur en ième position tab[i] 
    dans le tableau est divisible par 2.
    Si la condition est verifiée la valeur en ième position tab[i]
    est mise à jour avec la valeur 0.
    */
    if (tab[i] % 2 == 0 ){
        tab[i] = 0;
    }
    i++;
}
// Affichage des valeurs du tableau
console.log(tab);
