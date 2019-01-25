/*
Le but de l'exercice est de pouvoir trier des voitures selon leur type.
*/
const Voiture = require('./voiture');
const Sport = require('./sport');
const Suv = require('./suv');
const Berline = require('./berline');
const concessionnaire = require('./concessionnaire');

var c63 = new Sport(
    "c63",
    "mercedes",
    "sport",
);

var gle = new Suv(
    "gle",
    "mercedes",
    "SUV",
);

var cla = new Berline(
    "cla",
    "mercedes",
    "berline",
);

console.log(c63);
console.log(cla);
gle.marque = "x";
console.log(gle);
c63.ajouterKm(25);
c63.ajouterKm(25);
c63.ajouterKm(25);
c63.ajouterKm(25);

console.log("sport : "+c63.km);

gle.ajouterKm(25);
gle.ajouterKm(25);

console.log("suv : " + gle.km);

console.log("///////////////////////////");

var test = new Voiture(
    "X6",
    "BMW",
    "SUV",
    80,
);

var test1 = new Voiture(
    "tt",
    "audi",
    "sport",
    0,
);


var test2 = new Voiture(
    "urus",
    "lamborghini",
    "SUV",
    350,
);

console.log(test);

conce = new concessionnaire();

conce.ajouterVoitures(test);

conce.ajouterVoitures(test1);

conce.ajouterVoitures(test2);

console.log(conce);

