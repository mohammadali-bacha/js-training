/*
Dans ce fichier, nous exportons la classe LignesDeFacture dans laquelle nous passons en paramètres la quantité, le prix unitaire
et le taux de tva (qui sont des données non-calculées) puis nous initialisons  les  propriétés correspondantes + les propriétés 
avec des données calculées comme le total HT, TVA et TTC. Pour récuperer ces données, nous mettons  en place des getters et 
setters pour les modifier.
*/

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

    get txTVA() {
        return this._txTVA;
    }

    set txTVA(value) {
        this._txTVA = value;
        /*
        besoin de mettre à jour la propiété totalTTC car dépend de totalTVA qui elle même depend de txTVA 
        */
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }

    get quantite() {
        return this._quantite;
    }

    set quantite(value) {
        this._quantite = value;
/*
besoin de mettre à jour toutes les propiétés car totalTTC et totalTVA dépendent de totalHT qui dépend de quantité.
*/
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }

    get prixUnitaire() {
        return this._prixUnitaire;
    }

    set prixUnitaire(value) {
        this._prixUnitaire = value;
/*
besoin de mettre à jour toutes les propiétés car totalTTC et totalTVA dépendent de totalHT qui dépend de prixUnitaire.
*/
        this._totalHT = this._prixUnitaire * this._quantite;
        this._totalTVA = this._totalHT * this._txTVA;
        this._totalTTC = this._totalHT + this._totalTVA;
    }
/*
On récupère les propiétés :
*/
    get totalHT() {
        return this._totalHT;
    }
    get totalTVA() {
        return this._totalTVA;
    }
    get totalTTC() {
        return this._totalTTC;
    }
}