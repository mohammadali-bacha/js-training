const Car = require('./car');

module.exports = class Sport extends Car {
    constructor(model,brand) {
        super (model, brand)
    }
}
