/*
The purpose of the exercise is to repeat exercise 19 (create invoice and add InvoiceLines).
*/

/*
we'll initialize our invoice
*/

/*
in the constants below, we import the other classes  
(contained in the different files of the current folder) with require :
*/

/*
we declare the variables: 
*/
const Invoice = require('./invoice');
const DeliveryAddress = require('./address');
const InvoiceLine = require('./InvoiceLine');

/*
we instantiate the variables: 
*/
var address = new DeliveryAddress(
    "18 rue de la République",
    69003,
    "Lyon",
);

var invoice = new invoice(
    "purchase of equipment",
    1809,
    "12/09/2018",
    100,
    address,
    3,
    10,
    0.2,
);

var line1 = new InvoiceLine(
    5,
    20,
    0.2,
);

/*
a line (line1) is added to the table via the call of the addLines method: 
*/
invoice.addLines(line1);

var line2 = new InvoiceLine(
    20000,
    10,
    0.2,
);
invoice.addLines(line2);

var line3 = new InvoiceLine(
    4,
    3,
    0.2,
);
invoice.addLines(line3);

var line4 = new InvoiceLine(
    10,
    33,
    0.2,
);

invoice.addLines(line4);
/*
we display it all:
*/
console.log(invoice);
console.log("invoice.line: "+ invoice.numberoflines);
toto.invoice = 10;