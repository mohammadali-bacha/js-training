/*
Ce fichier contient la classe Facture dans laquelle nous initialisons les données
relatives a une facture (nom,date,numeor,adresse,accompte), de plus nous initialisons
les propiétés totalHT,totalTVA et totalTTC à 0 et _ligneDeFactures avec un tableau vide.     
*/

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
        this._nombreDeLignes = 0;
    }
    /*
    On récupère les propiétés
    */
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
    /*
    cette méthode nous permet d'ajouter des lignes 
    */
    ajouterLignes(ligne) {
        try {
            this._ligneDeFactures.push(ligne);
            this._totalHT = 0;
            this._totalTTC = 0;
            this._totalTVA = 0;
    
            for (var index = 0; index < this._ligneDeFactures.length; index++) {
    
                /*
                on met a jour les propiétés du dessus en les cumulant avec la valeur de l'index parcourue au moment t des totaux de chaque ligne        
                */
                var tempTotalHT = this._ligneDeFactures[index].totalHT; //
                var tempTotalTVA = this._ligneDeFactures[index].totalTVA
                var tempTotalTTC = this._ligneDeFactures[index].totalTTC;
                
                // le total ttc n'a pas ete encore maj, 
                // on calcule la valeur totalTTC qui va etre maj
                 if (this._totalTTC + tempTotalTTC > 10000) {
                     throw "";
                 }

                this._totalHT += tempTotalHT;
                this._totalTVA += tempTotalTVA;
                this._totalTTC += tempTotalTTC;
  
            }
            this._nombreDeLignes = this._ligneDeFactures.length;
        } catch (error) {
            this._ligneDeFactures.pop();
            console.log("Le montant de la facture est supérieur a 10 000$ !");
            
        }
    }
    get nombreDeLignes() {
        return this._nombreDeLignes;
    }
}