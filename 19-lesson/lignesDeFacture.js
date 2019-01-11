module.exports = class LignesDeFacture {
    constructor(
        quantite,
        prixUnitaire,
        txTVA,        
    ) {
        this._quantite = quantite;
        this._prixUnitaire = prixUnitaire;
        this._txTVA = txTVA;
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA; 
    }

    get txTVA(){
        return this._txTVA;
    }

    set txTVA(value){
        this._txTVA = value;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }
    get quantite (){
        return this._quantite;
    }

    set quantite(value){
        this._quantite = value;
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }

    get prixUnitaire (){
        return this._prixUnitaire;
    }

    set prixUnitaire(value){
        this._prixUnitaire = value;
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }

    get totalHT (){
        return this._totalHT;
    }
    get totalTVA () {
        return this._totalTVA;           
    }
    get totalTTC () {
        return this._totalTTC;           
    }

    get lignesDeFacture(){
        return this._ligneDeFactures;
    }
}