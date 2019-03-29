const Car = require('./car');

module.exports = class SUV extends Car{
    constructor(model,brand) {
        super (model, brand)
    }
}
