module.exports = function verifierTxDeGlucose(txDInsuline) {
    try {
        if (txDInsuline > 1 && txDInsuline < 2) {
            throw "prevenir l'infirmiere";
        } else if (txDInsuline > 2.5){
            throw "prevenir SAMU";
        }
    } catch(error){
        console.log(error);       
    }
}
