const Voiture = require('./voiture');

module.exports = class SUV extends Voiture{
    constructor(modele,marque) {
        super(modele,marque)
    }
}