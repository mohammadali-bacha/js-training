module.exports = function verifierTxDeLymphocites(txDeLymphocites) {
    try {
        var message = "Rien a signaler";
        if (txDeLymphocites > 1 && txDeLymphocites < 2) {
            throw "aller voir docteur !"
        }
        if (txDeLymphocites >= 2 && txDeLymphocites < 2.5) {
            throw "Infection virale !"
        }
        if (txDeLymphocites >= 2.5) {
            throw "Problème au foie !"
        } 

    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}