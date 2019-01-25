module.exports = class Voiture {
    constructor
        (
            modele,
            marque,
            type,
        ) {
            this._modele = modele;
            this._marque = marque;
            this._type = type;
            this._km = 0;
        }

    get km() {
        return this._km;
    }
    get modele() {

    }

    get marque() {
        return this._marque;
    }

    get type() {
        return this._type;
    }

    ajouterKm(km) {
        this._km += km;
    }
}