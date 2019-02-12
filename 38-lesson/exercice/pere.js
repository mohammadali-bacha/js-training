module.exports = class Pere {
    constructor(nom){
        this._fils = [];
        this._nom = nom;
    }
    get nom (){
        return this._nom;
    }
    get fils(){
        return this._fils;
    }
    ajouterFils(fils){
        this._fils.push(fils);
    }
}