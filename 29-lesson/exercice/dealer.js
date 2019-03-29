module.exports = class Dealer {
    constructor() {
        this._sportcars = [];
        this._sedancars = [];
        this._suv = [];
    }

    get sportcars() {
        return this._sportcars;
    }

    get sedancars() {
        return this._sedancars;
    }

    get suv() {
        return this._suv;
    }

    addCar(car) {
        
        if (car.constructor.name == "SUV") {
            this._suv.push(car);
        }
        if (car.constructor.name == "Sedan") {
            this._sedancars.push(car);
        }
        if (car.constructor.name == "Sport") {
            this._sportcars.push(car);
        }
    }
}



