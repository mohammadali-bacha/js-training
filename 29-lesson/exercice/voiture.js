module.exports = class Voiture {
    constructor
        (
            modele,
            marque
        ) {
            this._modele = modele;
            this._marque = marque;
            this._km = 0;
        }

    get km() {
        return this._km;
    }
    get modele() {
        return this._modele;
    }

    get marque() {
        return this._marque;
    }

    ajouterKm(km) {
        this._km += km;
    }
}