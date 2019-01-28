// const ligne = require('./ligne');

module.exports = class Tableau {
    constructor() {
        this._tableau = [];
        this._lignes = [];
    }
    get tableau() {
        return this._tableau;
    }
    set tableau(value) {
        this._tableau = value;
    }
    get lignes() {
        return this._lignes;
    }
    set lignes(value) {
        this._lignes = value;
    }
    ajouterLignes(number) {
        for (var index = 0; index < number; index++) {
            this._lignes.push(this._tableau);
        }
    }
}