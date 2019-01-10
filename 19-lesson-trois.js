/*
Le but de l'exercice est de refaire l'exercice 19 (créer facture et ajouter lignes de facture).
*/

class Facture {
    constructor(
        name,
        numero,
        date,
        accompte,
        addresseDeLivraison,
        quantite,
        prixUnitaire,
        txTVA,
    ) {
        this._name = name;
        this._numero = numero;
        this._date = date;
        this._accompte = accompte;
        this._addresseDeLivraison = addresseDeLivraison;
        // AdresseDeLivraison
        this._quantite = quantite;
        this._prixUnitaire = prixUnitaire;
        this._txTVA = txTVA;
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totaltHT + this._totalTVA;
        this._ligneDeFactures = [];
    }
    get name (){
        return this._name;
    }
    get numero (){
        return this._numero;
    }
    get date (){
        return this._date;
    }
    get accompte (){
        return this._accompte;
    }
    get adresseDeLivraison (){
        return this._adresseDeLivraison;
    }
    get quantite (){
        return this._quantite;
    }

    get prixUnitaire (){
        return this._prixUnitaire;
    }

    get quantite (){
        return this._quantite;
    }

    get txTVA (){
        return this._adresseDeLivraison;
    }
    get totalHT (){
        return this._adresseDeLivraison;
    }
    get totalTVA () {
        return this._totalTVA;           
    }
    get totalTTC () {
        return this._totalTTC;           
    }

    miseAJour(ligne) {
        this._ligneDeFactures.push(ligne)
    }

}

class LignesDeFacture {
    constructor(
        quantite,
        prixUnitaire,
        txTVA,
    ) {
        this._quantite = quantite;
        this._prixUnitaire = prixUnitaire;
        this._txTVA = txTVA;
        this._totalHT = this._prixUnitaire * this._quantite; // question , sans le this : prixUnitaire et quantite ont l'air d'etre reconnus
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totaltHT + this._totalTVA;
    }

}


class AdresseDeLivraison {
    constructor(
        rue,
        code,
        ville
    ) {
        this.rue = rue;
        this.code = code;
        this.ville = ville;
    }
}

var resultat = new Facture(
    "achat de matériel",
    1809,
    "12/09/2018",
    100,
    adresse,
    3,
    10,
    0.2,
);

var lignes = new LignesDeFacture(
    5,
    20,
    0.2,
);


var adresse = new AdresseDeLivraison(
    "18 rue de la République",
    69003,
    "Lyon",
);


Facture.miseAJour(lignes);

console.log(resultat);

// console.log(resultat);

// console.log(resultat);


