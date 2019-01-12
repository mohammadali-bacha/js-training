module.exports = class Facture {
    constructor(
        name,
        numero,
        date,
        accompte,
        addresseDeLivraison,
    ) {
        this._name = name;
        this._numero = numero;
        this._date = date;
        this._accompte = accompte;
        this._addresseDeLivraison = addresseDeLivraison;
        this._totalHT = 0;
        this._totalTVA = 0;
        this._totalTTC = 0;
        this._ligneDeFactures = [];
    }
    get name() {
        return this._name;
    }
    get numero() {
        return this._numero;
    }
    get date() {
        return this._date;
    }
    get accompte() {
        return this._accompte;
    }
    get adresseDeLivraison() {
        return this._adresseDeLivraison;
    }
    get totalHT() {
        return this._totalHT;
    }
    get totalTVA() {
        return this._totalTVA;
    }
    get totalTTC() {
        return this._totalTTC;
    }

    ajouterLignes(ligne) {
        this._ligneDeFactures.push(ligne);
       
        this._totalHT = 0;
        this._totalTTC = 0;
        this._totalTVA = 0;
        console.log("ajout d'une nouvelle ligne : ");
        
        for (var index = 0; index < this._ligneDeFactures.length; index++) {
            // console.log('-----avant-----');
            
            // console.log("totalHT : "+this._totalHT);
           
            this._totalHT += this._ligneDeFactures[index].totalHT;
            this._totalTVA += this._ligneDeFactures[index].totalTVA;
            this._totalTTC += this._ligneDeFactures[index].totalTTC;
            // console.log('-----apres-----');

            // console.log("totalHT : "+this._totalHT);            
        }
    }
    get ligne(){
        return this._ligneDeFactures.length;

    }


}