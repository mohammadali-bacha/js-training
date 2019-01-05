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
    constructor(name,
        numero, 
        date, 
        txTva,
        prixUnitaire,
        quantite,
        addresseDeLivraison,
        accompte,

        ){
        this._name = name;
        this._numero = numero; 
        this._date = date;
        this._txTva = txTva;
        this._prixUnitaire = prixUnitaire;
        this._quantite = quantite;
        this._accompte = accompte;
        this._addresseDeLivraison = addresseDeLivraison;
        this._montantHT =  this._quantite * this._prixUnitaire ;
        this._montantTVA =  this._montantHT * this._txTva ;
        this._montantTTC = this._montantTVA + this._montantHT;

    }

    get montantHT(){
        return this._montantHT;
    } 
    set txTva(value){
        this._txTva = value;
        this._montantHT =  this._quantite * this._prixUnitaire ;
        this._montantTVA =  this._montantHT * this._txTva ;
        this._montantTTC = this._montantTVA + this._montantHT;
    }

    get txTva(){
        return this._txTva;
    }

    set quantite(value){
        this._quantite = value;
        this._montantHT =  this._quantite * this._prixUnitaire ;
        this._montantTVA =  this._montantHT * this._txTva ;
        this._montantTTC = this._montantTVA + this._montantHT;
    }

    get quantite(){
        return this._quantite;
    }
}


class AddresseDeLivraison {
    constructor(rue, 
        ville, 
        codePostal)
    {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
}

/*
On instancie les classes :
*/
var voiture = new Voiture("Peugeot 206");
var moto = new Moto("harley davidsson");
var adresse =  new AddresseDeLivraison(
    "rue de la republique",
    "lyon",
    69003);
var facture = new Facture("Achat de materiel",
                        1200,
                        "01/02/2019",
                        0.20,
                        200.00,
                        5.00,
                        adresse,
                        150.00,
                         );

/*
On affiche les propietes des classes :
*/
console.log(voiture.name);
// console.log(voiture.roues);

console.log(moto.modele);

console.log(facture);
console.log("montant HT : " + facture.montantHT);
console.log(" Tx TVA: " + facture.txTva);
facture.txTva = 8.00
console.log(" Tx TVA: " + facture.txTva);
console.log(facture);
facture.quantite = 3
console.log(" Quantité: " + facture.quantite);
console.log(facture);
//console.log("montantTTC : " + facture.montantTTC);
//console.log("montantTVA : " + facture.montantTVA);



