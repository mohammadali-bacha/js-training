const Voiture = require('./voiture');

module.exports = class Berline extends Voiture{
    constructor(modele,marque) {
        super(modele,marque)
    }
}