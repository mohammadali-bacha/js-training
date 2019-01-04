/*
Faire des classes selon les schemas objets  comme dans l'exemple sur papier avec voiture, facture et moto.
*/

/*
Dans cette classe, on initilaise les proprietes avec d'autres classes qui sont re-utilisees ailleurs
*/
class Voiture {
   constructor(name){
        this.name = name;
        this.roues = [];
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.moteur = new Moteur();
        this.volant = new Volant();
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
    constructor(matiere){
        this.matiere = matiere;
    }
}

// class Type {
//     constructor(type, matiere, couleur){
//         this.type = type;
//         this.matiere = matiere;
//         this.couleur = couleur;
//     }
// }

class Siege {
    constructor(couleurDuSiege, matiereDuSiege){
        this.couleurDuSiege = couleurDuSiege;
        this.matiereDuSiege = matiereDuSiege;
    }
}
/*
Dans cette classe, on initilaise les proprietes avec d'autres classes qui sont re-utilisees ailleurs
*/
class Moto {
    constructor(modele){
        this.modele = modele;
        this.roues = [];
        this.roues.push(new Roue());
        this.roues.push(new Roue());
        this.guidon = new Guidon();
        this.moteur = new Moteur();
        this.sieges = new Siege();
        this.sieges = new Siege();
    }
}

class Moteur {
    constructor(){
    }
}

class Guidon {
    constructor(matiere){
        this.matiere = matiere;
    }
}
/*
Dans cette classe, on initilaise les proprietes avec d'autres classes qui sont re-utilisees ailleurs
*/
class Facture {
    constructor(name){
        this.name = name;
        this.numero = new NumeroDeFacture(); 
        this.date = new DateDeCreation();
        this.description = new Description();
        this.tva = new PrixTva();
        this.ttc = new PrixUnitaireTTC();
        this.unitaire = new PrixUnitaire();
        this.prixTotalTTC = new PrixTotalTTC();
        this.prixTotalHT = new PrixTotalHT();
        this.addresseDeLaSociete = new AddresseDeLaSociete();
        this.addresseDeFacturation = new AddresseDeFacturation();
        this.accompte = new Accompte();
        this.soldeDu = new SoldeDu();

    }
}

class DateDeCreation{
    constructor(name){
        this.name = name;
    }
}

class NumeroDeFacture {
    constructor(numero, description){
        this.numero = numero;
        this.description = new Description();

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

class PrixTotalTTC {
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
    constructor(addresse){
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


/*
On instancie les classes :
*/
var voiture = new Voiture("Peugeot 206");
var moto = new Moto("harley davidsson");
var facture = new Facture("amazon");

/*
On affiche les propietes des classes :
*/
console.log(voiture.name);
// console.log(voiture.roues);

console.log(moto.modele);

console.log(facture.name);
