const Pere = require('./pere');
const Fils = require('./fils');


georges = new Pere('georges');

lucas = new Fils(georges,'lucas');

console.log(georges);

// console.log(lucas);

georges.ajouterFils(lucas);


console.log(georges.fils[0]);

