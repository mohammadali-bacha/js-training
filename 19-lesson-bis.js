
class LigneDeFacture {
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

var ligne = new LigneDeFacture(
    4,
    50,
    0.2,
);

console.log(ligne)

/*
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


*/