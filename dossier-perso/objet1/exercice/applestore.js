module.exports = class Applestore {
    constructor() {
        this._iphones = [];
        this._ipads = [];
        this._macbooks = [];
    }
    get iphones() {
        return this._iphones;
    }
    get ipads() {
        return this._ipads;
    }
    get macbooks() {
        return this._macbooks;
    }
    ajouterMateriel(apple) {
        if (apple.constructor.name == "Iphone") {
            this._iphones.push(apple)
        }
        if (apple.constructor.name == "Ipad") {
            this._ipads.push(apple)
        }
        if (apple.constructor.name == "Macbook") {
            this._macbooks.push(apple)
        }
    }
};