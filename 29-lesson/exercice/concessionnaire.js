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
        if (this._voitures.type == "SUV") {
            this._suv.push(voiture);
        }
        if (voiture.type == "berline") {
            this._berlines.push(voiture);
        }
        if (voiture.type == "sportive") {
            this._sportives.push(voiture);
        }
    }
}





