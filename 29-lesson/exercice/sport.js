const Voiture = require('./voiture');

module.exports = class Sport extends Voiture {
    constructor(modele,marque,type) {
        super(modele,marque,type)
    }
}