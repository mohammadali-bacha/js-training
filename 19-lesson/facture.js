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
        this._ligneDeFactures.push(ligne);        
        this._totalHT = 0;
        this._totalTTC = 0;
        this._totalTVA = 0;
        // console.log("ajout d'une nouvelle ligne : ");
        
        for (var index = 0; index < this._ligneDeFactures.length; index++) {
            // console.log('-----avant-----');
            
            // console.log("totalHT : "+this._totalHT);
/*
on met a jour les propiétés du dessus en les cumulant avec la valeur de l'index parcourue au moment t des totaux de chaque ligne        
*/        
            this._totalHT += this._ligneDeFactures[index].totalHT;
            this._totalTVA += this._ligneDeFactures[index].totalTVA;
            this._totalTTC += this._ligneDeFactures[index].totalTTC;
            this._nombreDeLignes = this._ligneDeFactures.length;            
            // console.log('-----apres-----');

            // console.log("totalHT : "+this._totalHT);            
        }
        // console.log("nb de lignes : " + this._nombreDeLignes);
    }
    // get ligne(){
    //     return this._ligneDeFactures.length;
    // }
    get nombreDeLignes(){
        return this._nombreDeLignes;
    }
}
