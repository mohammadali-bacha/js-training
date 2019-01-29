const Cellule = require('./cellule');

module.exports = class Ligne {
    constructor() {
        this._cellules = [];
        this._cellules.push(new Cellule("A"));
        this._cellules.push(new Cellule("B"));
        this._cellules.push(new Cellule("C"));
        this._cellules.push(new Cellule("D"));
        this._cellules.push(new Cellule("E"));

    }
    get cellules() {
        return this._cellules;
    }
    
}