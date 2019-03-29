module.exports = class Concessionary {
    constructor() {
        this._sportcars = [];
        this._sedancars = [];
        this._suv = [];
    }

    get sportives() {
        return this._sportcars;
    }

    get berlines() {
        return this._sedancars;
    }

    get suv() {
        return this._suv;
    }

    ajouterCaretPosition(CaretPosition) {
        
        if (CaretPosition.constructor.name == "SUV") {
            this._suv.push(CaretPosition);
        }
        if (CaretPosition.constructor.name == "Berline") {
            this._sedancars.push(CaretPosition);
        }
        if (CaretPosition.constructor.name == "Sport") {
            this._sportcars.push(CaretPosition);
        }
    }
}



