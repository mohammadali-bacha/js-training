/*
Le but de l'exercice est de pouvoir trier des voitures selon leur type.
*/
const Sport = require('./sport');
const SUV = require('./suv');
const Berline = require('./berline');
const Concessionnaire = require('./concessionnaire');

var  bmw = new SUV(
    "X6",
    "BMW"
);

var audi = new Sport(
    "tt",
    "audi"
);


var lamborghini = new SUV(
    "urus",
    "lamborghini"
);

var mercedes = new Berline(
    "cla",
    "mercedes"
)

audi.marque = "x";
bmw.ajouterKm(25);
bmw.ajouterKm(25);
bmw.ajouterKm(25);
bmw.ajouterKm(25);
console.log("-----------------");

console.log(" voiture sport, nombre de km : "+bmw.km);

console.log("-----------------");

lamborghini.ajouterKm(25);
lamborghini.ajouterKm(25);
console.log("-----------------");

console.log("voiture SUV, nombre de km : " + lamborghini.km);


console.log("-----------------");



concessionnaire = new Concessionnaire();

concessionnaire.ajouterVoiture(bmw);

concessionnaire.ajouterVoiture(mercedes);

concessionnaire.ajouterVoiture(audi);

concessionnaire.ajouterVoiture(lamborghini);

console.log(concessionnaire);

