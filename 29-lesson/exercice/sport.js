const Voiture = require('./voiture');

module.exports = class Sport extends Voiture {
    constructor(modele,marque) {
        super(modele,marque)
    }
}