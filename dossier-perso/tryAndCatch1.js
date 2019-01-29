/*
2ème exercice try and catch : le but est de retourner des exceptions 
*/


function saisirNombre(number) {
    try {
        var message = "voici le nombre que vous avez saisi :" + number;
        if (number <= 1) {
            throw "n doit etre plus grand que 1 et plus petit que 10";
        }
        if (number >= 10) {
            throw "Rentrez un nombre compris entre 1 et 10"

        }
        if (isNaN(number)) {
            throw "Veuillez rentrer un nombre";
        }
    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}

var resultat = saisirNombre(200);


///////////////version switch case break


// function saisirChoix(number) {
//     try {
//         var message = "voici le nombre que vous avez saisi :" + number;
//         switch(number){
//          case number <= 1 :
//          throw "n doit etre plus grand que 1 et plus petit que n ";
//          break;
//         case number >= number :
//         throw "Rentrez un nombre compris entre 1 et n"
//          break;
//          case isNaN(number) :
//          throw "Veuillez rentrer un nombre"
//     }
//     } catch (error) {
//         message = error;
//     } finally {
//         console.log(message);       
//     }
// }

// var resultat = saisirChoix(0);