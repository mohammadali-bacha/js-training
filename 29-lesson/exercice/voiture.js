module.exports = class Voiture {
    constructor
        (
            model,
            brand
        ) {
            this._model = model;
            this._brand = brand;
            this._km = 0;
        }

    get km() {
        return this._km;
    }
    get model() {
        return this._model;
    }

    get brand() {
        return this._brand;
    }

    ajouterKm(km) {
        this._km += km;
    }
}