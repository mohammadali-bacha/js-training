// const Cellule = require('./cellule');

module.exports = class Ligne {
    constructor() {
        this._cellule = [];
    }
    get cellule() {
        return this._cellule;
    }
    set cellule(value) {
        this._cellule = value;
    }
    ajouterCellules() {
        for (var index = 0; index < 5; index++) {
            this._cellule.push([]);
        }
    }
}