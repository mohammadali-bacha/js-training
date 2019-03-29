/*
The purpose of the exercise is to be able to sort cars by type.
*/

const Sport = require('./sport');
const SUV = require('./suv');
const Sedan = require('./sedan');
Dealer = require('./dealer');

var bmw = new SUV(
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

var mercedes = new Sedan(
    "cla.",
    "mercedes"
)

audi.brand = "x";
bmw.addKm(25);
bmw.addKm(25);
bmw.addKm(25);
bmw.addKm(25);
console.log("-------------------------");

console.log(" sports car, number of km: "+bmw.km);

console.log("-------------------------");

lamborghini.addKm(25);
lamborghini.addKm(25);
console.log("-------------------------");

console.log("SUV car, number of km:" + lamborghini.km);


console.log("-------------------------");


dealer = new Dealer();

dealer.addCar(bmw);

dealer.addCar(mercedes);

dealer.addCar(audi);

dealer.addCar(lamborghini);

console.log(dealer);




