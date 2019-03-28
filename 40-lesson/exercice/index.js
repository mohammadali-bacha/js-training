/*
Exemple de fonction uploadée dans AWS Lambda.
*/


function plusGrandeValeurTableau(tableau) {
    var miseSurEtagere = tableau[0];
    for (var index = 0; index < tableau.length; index++) {
        if (miseSurEtagere < tableau[index]) {
            miseSurEtagere = tableau[index];

        }
    }
    return console.log(miseSurEtagere);
}

var tableau = [3, 90, 54, 32, 19];

resultat = plusGrandeValeurTableau(tableau);


/////

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };