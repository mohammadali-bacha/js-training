/*
Le but de l'exercice est de pouvoir trier des voitures selon leur type.
*/

class Voiture {
    constructor
        (
        modele,
        marque,
        ) {
            this._modele = modele;
            this._marque = marque;
            this._km = 0;
        }
        get km(){
            return this._km;
        }
        set marque(value){
            this._marque = value;
        }
        ajouterKm(km){
            this._km += km;
        }
}

class Sport extends Voiture {
    constructor(modele,marque) {
        super(modele,marque)
    }
}

class SUV extends Voiture{
    constructor(modele,marque) {
        super(modele,marque)
    }
}

class Berline extends Voiture{
    constructor(modele,marque) {
        super(modele,marque)
    }
}

var sport = new Sport(
    "c63",
    "mercedes"
);

var suv = new SUV(
    "gle",
    "mercedes"
);

var berline = new Berline(
    "cla",
    "mercedes"
);

console.log(sport);
console.log( berline);
suv.marque = "x";
console.log(suv);
sport.ajouterKm(25);
sport.ajouterKm(25);
sport.ajouterKm(25);
sport.ajouterKm(25);

console.log("sport : "+sport.km);

suv.ajouterKm(25);
suv.ajouterKm(25);

console.log("suv : "+suv.km);

