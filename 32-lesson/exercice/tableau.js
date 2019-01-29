module.exports = class Tableau {
    constructor() {
        this._lignes =[];
    }
    ajouterLigne(ligne){
        this._lignes.push(ligne);
    }
    get lignes(){
        return this._lignes;
    }
}