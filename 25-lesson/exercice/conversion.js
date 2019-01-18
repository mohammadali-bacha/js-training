module.exports = function conversionEuroDollars(valeur, txChange) {
    var valeurConvertie = 0;
    var valeurCalculee = (valeur * txChange);

    if (valeur < 100) {
        valeurConvertie = valeurCalculee - 5;

    } else {
        valeurConvertie = valeurCalculee - (3 / 100) * valeurCalculee;

    }

    return valeurConvertie;
}