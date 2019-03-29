/*
 Object model with table, line and 5 cells per line.
*/


const Table = require('./table');
const Line = require('./line');

var lineA = new Line();
var lineB = new Line();

var table = new Table(
);

table.addLine(lineA);
table.addLine(lineB);

console.log(table.lines[1]);


//4th cell of line 2

console.log(table.lines[1].cells[3]);

