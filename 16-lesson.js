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
    constructor(name,numero){
        this.name = name;
        this.numero = numero; 
        this.date = date;
        this.description = description;
        this.tva = tva;
        this.ttc = ttc ;
        this.unitaire = unitaire;
        this.prixTotalTTC = prixTTC;
        this.prixTotalHT = prixTotalHT;
        this.addresseDeLaSociete = new AddresseDeLaSociete();
        this.addresseDeFacturation = new AddresseDeFacturation();
        this.accompte = accompte;
        this.soldeDu = SoldeDu;

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

console.log(facture);
