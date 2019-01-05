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
        this._txva = txTva;
        this._prixUnitaire = prixUnitaire;
        this._quantite = quantite;
        this._accompte = accompte;
        this._addresseDeLivraison = addresseDeLivraison;
    

    }
    get montantHT(){
        return montant = this._quantite * this._prixUnitaire;
    }
    get montantTVA(){
        return tva = this.montant * this._txTva;
    }
    get montantTTC(){
        return montant + tva;
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
var facture = new Facture("Achat de materiel",
                        1200,
                        "01/02/2019",
                        0.20,
                        200.00,
                        5.00,
                        new AddresseDeLivraison(
                            "rue de la republique",
                            "lyon",
                            69003),
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
console.log("montantTTC : " + facture.montantTTC);
console.log("montantTVA : " + facture.montantTVA);



