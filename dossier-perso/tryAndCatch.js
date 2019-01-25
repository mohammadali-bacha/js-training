/*
L'exercice consiste a parcourir le tableau et rechercher les valeurs divisibles par 2 puis les remplacer par un multiple de 3
*/

function tryAndCatch(number) {
    try {
        var message = number + " est un multiple de 2";
        if (number % 2 != 0) {
            throw number + " n'est pas un multiple de 2"
        }
    } catch (error) {
        message = error
    } finally {
        console.log(message);
    }
}

var tableau = [1, 4, 2, 5, 6, 12, 3];

for (var index = 0; index < tableau.length; index++) {
    tryAndCatch(tableau[index]);
}

if (condition) {
    
}