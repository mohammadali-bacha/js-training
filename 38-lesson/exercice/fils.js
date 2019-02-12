module.exports = class Fils {
    constructor(pere){
        this._pere = pere;
    }
    get fils (){
        return this._fils;
    }
    set fils(value){
        this._fils = value;
    }
}