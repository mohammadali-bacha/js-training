/*
Example of a function uploaded in AWS Lambda.
*/


function plusLargeValueTable(table) {
    var overShelving = table[0];
    for (var index = 0; index < table.length; index++) {
        if (overShelving < table[index]) {
            overShelving = table[index];

        }
    }
    return console.log(shelving);
}

var table =[3, 90, 54, 32, 19];

result = largestLargestValueTable(table);


/////

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };