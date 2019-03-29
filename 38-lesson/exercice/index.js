/*
 The purpose of this exercise is to study the cardinal relationships 1-1 and 1-n.
*/


const Pere = require('./pere');
const Son = require('./son');


georges = new Pere('georges');

lucas = new Son (georges,'lucas');

console.log(georges);

// console.log(lucas);

georges.addFils(lucas);


console.log(georges.fils[0]);


