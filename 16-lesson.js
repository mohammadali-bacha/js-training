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
        this.moteur = moteur;
        this.volant = volant;
        this.sieges = [];
        this.sieges.push(new Siege()); 
        this.sieges.push(new Siege()); 
        this.sieges.push(new Siege()); 
        this.sieges.push(new Siege()); 
    }
}

class Roue {
    constructor(name){
        this.name = name;
    }
}

class Volant {
    constructor(name){
        this.name = name;
        this.matiere = matiere;
    }
}

class Siege {
    constructor(name){
        this.name = name;
        this.couleur = couleur;
        this.type = type;
    }
}

class Moto {
    constructor(name){
        this.name = name;
        this.roues = [];
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.guidon = new Guidon();
        this.moteur = new Moteur();
    }
}

class Moteur {
    constructor(name){
        this.name = name;
    }
}

class Guidon {
    constructor(name){
        this.name = name;
        this.matiere = matiere;
    }
}

class Facture {
    constructor(name){
        this.name = name;
        this.numero = new NumeroDeFacture(); 
        this.date = new DateDeCreation();
        this.description = new Description();
        this.tva = new PrixTva();
        this.ttc = new PrixUnitaireTTC();
        this.unitaire = new PrixUnitaire();
        this.addresseDeLaSociete = new AddresseDeLaSociete();
        this.addresseDeFacturation = new AddresseDeFacturation();
        this.prixTotalHT = new PrixTotalHT();
        this.accompte = new Accompte();
        this.soldeDu = new SoldeDu();
        this.prixUnitaire = new PrixUnitaire();
    }
}

class DateDeCreation{
    constructor(name){
        this.name = name;
    }
}

class NumeroDeFacture {
    constructor(numero){
        this.numero = numero;
        this.description = description;

    }
}

class Description {
    constructor(name){
        this.name = name;
    }
}


class PrixUnitaire {
    constructor(name){
        this.name = name;
    }
}

class PrixTva {
    constructor(name){
        this.name = name;
    }
}

class PrixUnitaireTTC {
    constructor(name){
        this.name = name;
    }
}

class AddresseDeLaSociete {
    constructor(name){
        this.name = name;
    }
}

class AddresseDeFacturation {
    constructor(name){
        this.name = name;
        this.addresse = addresse;
    }
}

class PrixTotalHT {
    constructor(name){
        this.name = name;
    }
}

class Accompte {
    constructor(name){
        this.name = name;
    }
}

class SoldeDu {
    constructor(name){
        this.name = name;
    }
}



var voiture = new Voiture("Peugeot 206");
var moto = new Moto("harley davidsson");
var facture = new Facture("");

console.log(voiture.name);
console.log(voiture.roues);

console.log(moto.name);

console.log(facture.numero);
