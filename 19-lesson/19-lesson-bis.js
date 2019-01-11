class Facture {
    constructor(
        /*
On initialise les paramètres dans le constructeur :
        */
        numero, 
        name,
        date, 
        addresseDeLivraison,
        accompte, 
        ){
        /*
On initialise les propriétés dans le constructeur :
        */
        this._name = name;
        this._numero = numero; 
        this._date = date;
        this._accompte = accompte;
        this._addresseDeLivraison = addresseDeLivraison;
        this._totalTTC = 0;
        this._totalTVA = 0;
        this._totalHT = 0;
        this._lignesDeFactures = [];
    }
        /*
Ici, on utilise des getters et setters pour récupérer les valeurs (get) et ensuite les
modifier (set).
        */
    get montantHT(){
        return this._montantHT; 
    } 

    get txTva() {
        return this._txTva;
    }

    set txTva(value) {
        this._txTva = value;
    }

    get quantite(){
        return this._quantite;
    }

    set quantite(value) {
        this._quantite = value;
    }

    get totalTTC(){
        return this._totalTTC;
    }

    get totalTVA(){
        return this._totalTVA;
    }

    get totalHT(){
        return this._totalHT;
    }

    get lignesDeFactures(){
        return this._lignesDeFactures;
    }

    ajouterLigneDeFacture(ligne){
        this._lignesDeFactures.push(ligne);
    }
}
class LigneDeFacture {
    constructor(
        quantite,
        prixUnitaire,
        txTva,
    ){
        this._quantite = quantite;
        this._prixUnitaire = prixUnitaire;
        this._txTva = txTva;
        this._montantHT = this._quantite * this._prixUnitaire;
        this._totalTVA = this._montantHT * this._txTva; 
        this._totalTTC = this._montantHT + this._totalTVA;
    }

    get quantite(){
        return this._quantite;
    }

    set quantite(value){
        this._quantite = value;
       this.miseAjour();
   }

    get prixUnitaire(){
       return this.prixUnitaire;
    }

    set prixUnitaire(value){
        this._prixUnitaire = value;
        this.miseAjour();
    }

    get txTva(){
        return this._txTva;
    }

    set txTva(value){
        this._txTva = value;
        this.miseAjour();
   }
    get montantHT(){
        return this._montantHT;
    }

    get totalTVA(){
        return this._totalTVA;
    }

    get totalTTC(){
        return this._totalTTC;
    }


    miseAjour(){
        this._montantHT = this._quantite * this._prixUnitaire;
        this._totalTVA = this._montantHT * this._txTva; 
        this._totalTTC = this._montantHT + this._totalTVA;
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


var ligne1 = new LigneDeFacture(
    4,
    50,
    0.2,
);

var ligne2 = new LigneDeFacture(
    5,
    10,
    0.2,
);

var facture = new Facture(
    1805,
    "Achat de materiel",
    '12/06/2018',
    adresse,
    150.00,
     );

facture.ajouterLigneDeFacture(ligne1);
facture.ajouterLigneDeFacture(ligne2);

console.log("----facture-----");

console.log(facture);

console.log("-----lignesDeFactures----");

console.log(facture.lignesDeFactures);
