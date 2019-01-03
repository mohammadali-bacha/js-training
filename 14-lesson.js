class Voiture {

    constructor(name){
        this.name = name;
        this.roues = [];
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.roues.push(new Roue());
    }

}

class Roue {

    constructor(){
    }
}

class Volant {
    constructor(name){
        this.name = name;
    }
}

var voiture = new Voiture("Peugeot 206");


console.log(voiture.name);
console.log(voiture.roues);


