/*
 Object model with array, line and 5 cells per line.
*/


const Array = require('./array');
const Line = require('./line');

var lineA = new Line();
var lineB = new Line();

var array = new Array(
);

array.addLine(lineA);
array.addLine(lineB);

console.log(array.lines[1]);


//4th cell of line 2

console.log(array.lines[1].cells[3]);

