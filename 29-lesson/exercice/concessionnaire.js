module.exports = class Concessionnaire {
    constructor() {
        this._sportives = [];
        this._berlines = [];
        this._suv = [];
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

    ajouterVoiture(voiture) {
        
        if (voiture.constructor.name == "SUV") {
            this._suv.push(voiture);
        }
        if (voiture.constructor.name == "Berline") {
            this._berlines.push(voiture);
        }
        if (voiture.constructor.name == "Sport") {
            this._sportives.push(voiture);
        }
    }
}



