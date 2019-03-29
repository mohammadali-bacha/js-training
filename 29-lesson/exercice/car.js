module.exports = class Car {
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

    addKm(km) {
        this._km += km;
    }
}