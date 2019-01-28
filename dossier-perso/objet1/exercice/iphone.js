const Apple = require('./apple');

module.exports = class Iphone extends Apple{
    constructor(
        capacité,
        ecran,
        ram,
        couleur,
        systeme
    ) {
        super(
            capacité,
            ecran,
            ram,
            couleur,
            systeme
        )
    }
};