/*
L'exercice consiste a parcourir le tableau 
et rechercher les valeurs divisibles par 2 
puis les remplacer par 0
*/

/* 
Initialisation variable d'un tableau
*/
var tab = [1,4,2,5,6,12,3];

/* 
Recuperation de la longeur du tableau
*/
var lg = tab.length;

/*
Utilisation d'une boucle for pour parcourir le tableau de valeur  
*/

for (var i = 0; i < lg;) {
    /*
    La condition verifie si la valeur en ieme position tab[i] 
    dans le tableau est divisible par 2.
    Si la condition est verifié la valeur en ieme position tab[i]
    est mis à jour avec la valeur 0 
    */
    if (tab[i] % 2 == 0 ){
        tab[i] = 0;
    }
    i++;
}
// Affichage des valeurs du tableau
console.log(tab);
