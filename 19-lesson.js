class Facture {
    constructor(
        /*
On initialise les paramètres dans le constructeur :
        */
        name,
        numero, 
        date, 
        txTva,
        prixUnitaire,
        quantite,
        addresseDeLivraison,
        accompte,
        ){
        /*
On initialise les propriétés dans le constructeur :
        */
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
        this._lignesDeFacture = [];
        this._nbDeLignes = nbDeLignes;

    }
        /*
Ici, on utilise des getters et setters pour récupérer les valeurs (get) et ensuite les
modifier (set).
        */


    get montantHT(){
        return this._montantHT;
    } 

    set txTva(value) {
        this._txTva = value;
    }

    get txTva() {
        return this._txTva;
    }

    set quantite(value) {
        this._quantite = value;
    }

    get quantite(){
        return this._quantite;
    }

    get ligne(){
        return this.ajouterLignesDeFactures();
    }

    set nb(){
        
    }
    ajouterLignesDeFactures() {
        return 
    }
}

class LignesDeFacture {
    constructor(
        quantite,
        prixUnitaire,
        txTva
    ){
        this._quantite = quantite;
        this._prixUnitaire = prixUnitaire;
        this._txTva = txTva;
    }
}


class AddresseDeLivraison {
    constructor(
        rue, 
        ville, 
        codePostal)
    {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
}


var adresse =  new AddresseDeLivraison(
    "rue de la republique",
    "lyon",
    69003);

var lignes = new LignesDeFacture(
    4,
    50,
    0.2,
);

var facture = new Facture(
                        "Achat de materiel",
                        1200,
                        "01/02/2019",
                        0.20,
                        200.00,
                        5.00,
                        adresse,
                        150.00,
                         );

/*
On affiche les propiétés des classes :
*/
console.log(lignes);

console.log(lignes.ligne);

console.log(facture);

// console.log(facture.LignesDeFacture._lignesDeFacture);


console.log("-------------------------------------------");
/*
On affiche les propiétés des classes :
*/



























console.log(facture);

console.log("-------------------------------------------");

facture.txTva = 8.00

console.log(facture);

console.log("-------------------------------------------");

facture.quantite = 3

console.log(facture);