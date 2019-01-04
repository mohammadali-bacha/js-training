/*
Faire des classes selon les schemas objets  comme dans l'exemple sur papier avec voiture, facture et moto.
*/



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

class Siege {
    constructor(){
        
    }
}


class Moto {
    constructor(name){
        this.name = name;
    }
}


class Moteur {
    constructor(){

    }
}

class Guidon {
    constructor(){

    }
}


class Facture {
    constructor(name){
        this.name;
    }
}


// class 
















var voiture = new Voiture("Peugeot 206");
var moto = new Moto("harley davidsson");

console.log(voiture.name);
console.log(voiture.roues);

console.log(moto.name);

