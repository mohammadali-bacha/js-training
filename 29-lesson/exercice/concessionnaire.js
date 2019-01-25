module.exports = class Concessionnaire {
    constructor() {
        this._voitures = [];
        this._sportives = [];
        this._berlines = [];
        this._suv = [];
    }
    get voitures() {
        return this._voitures;
    }

    get sportives() {
        return this._sportives;
    }

    get berlines() {
        return this._berlines;
    }

    get suv() {
        return this._suv;
    }

    ajouterVoitures(voiture) {
        this._voitures.push(voiture);
    }

    triDesVoitures(voiture) {
        if (this._voitures.type == "SUV".toUpperCase) {
            this._suv.push(voiture);
        }
        if (voiture.type == "berline".toLowerCase) {
            this._berlines.push(voiture);
        }
        if (voiture.type == "sportive".toLowerCase) {
            this._sportives.push(voiture);
        }
    }
}





