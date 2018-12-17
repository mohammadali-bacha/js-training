
L'exercice consiste a parcourir le tableau et rechercher les valeurs divisibles par 2 puis les  remplacer par un multiple de 3.
Le 2eme exercice consiste a filtrer par ordre croissant les valeurs du tableau.

exo final : parcourir tableau = besoin de connaitre longeur du tableau + un compteur

-1er sous-exo : parcourir un tableau, recup une var qui recupere la longeur du tableau. pas besoin de boucle.
-2eme sous-exo : 1er sous-exo  afficher la donnee qui se trouve en enieme position dans le tableau : log(tab[i]).
-3eme sous-exo : lorsque l'element divisble par 2 est trouver, je le marque par 0.
-4eme sous-exo : au lieu de remplacer par zero, on recupere l'enieme position et on multiplie par 3.

Objectif de l'exo : etre capable d'initialiser variables, parcourir un tablo, recuperer longueur tablo, changer valeur d'une variable dans tablo.

il n'y a pas de console.log dans une condition.


//pusher sur git mais avant il doit marcher, 

//1er sous-exo:
var tab = [1,4,2,5,6,12,3];
// tab[1] = tab[1] * 3;


var lg = tab.length;
// console.log('la taille est de '+ lg);
// var limit = lg - 1; car ne commence pas a compter a 0 mais a 1.
// console.log(limit);

// 2eme sous-exo:

for (var i = 0; i < lg;) {
    // console.log(tab[i]);
    // 3eme sous-exo: 
    if (tab[i] % 2 == 0 ){
        tab[i] = 0;
        // console.log(tab);
        do {
            tab[i]= tab[i] * 3; 
        }   while (tab[i] == 0 );
             
    // console.log(tab);
    }
    i++;
}
console.log(tab);