/*
Example of a function uploaded in AWS Lambda.
*/


function largestValueArray(array) {
    var overShelving = array[0];
    for (var index = 0; index < array.length; index++) {
        if (overShelving < array[index]) {
            overShelving = array[index];

        }
    }
    return console.log(overShelving);
}

var array =[3, 90, 54, 32, 19];

result = largestValueArray(array);


/////

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };