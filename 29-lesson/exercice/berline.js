const Voiture = require('./voiture');

module.exports = class Berline extends Voiture{
    constructor(modele,marque,type,km) {
        super(modele,marque,type)
    }
}