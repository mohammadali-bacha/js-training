module.exports = function verifierTxDeGlucose(txDInsuline) {
    try {
        var message = "Rien a signaler";
        if (txDInsuline > 1 && txDInsuline < 2) {
            throw "prevenir l'infirmiere";
        }
        if (txDInsuline > 2.5) {
            throw "prevenir SAMU";
        }

    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}