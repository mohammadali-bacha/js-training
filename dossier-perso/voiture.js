module.exports = class Voiture {
    constructor(
    modele,
    amg,
    berline,
    sport,
    suv,
    ){
    this._modele = modele;
    this._amg = amg;
    this._berline = berline;
    this._sport = sport;
    this._suv = suv;
    }
    get modele(){
        return this._modele = false;
    }
    set modele(value){

    }
    get amg(){
        return this._amg = false;
    }
    set amg(value){
        
    }
    get berline(){
        return this._berline = false;
    }
    set berline(value){
        
    }
    get sport(){
        return this._sport = false;
    }
    set sport(value){
        
    }
    get suv(){
        return this._suv = false;
    }
    set suv(value){
        
    }
}