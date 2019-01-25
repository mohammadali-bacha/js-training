const Voiture = require('./voiture');

module.exports = class SUV extends Voiture{
    constructor(modele,marque,type,km) {
        super(modele,marque,type)
    }
}