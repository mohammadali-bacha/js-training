const Car = require('./car');

module.exports = class Sedan extends Car{
    constructor(model,brand) {
        super (model, brand)
    }
}
