module.exports = function verifierTxDeLymphocites(txDeLymphocites) {
    try {
        if (txDeLymphocites == 2.5) {
            throw "Allez à l'hôpital !"
        } else if(txDeLymphocites > 1 && txDeLymphocites < 2) {
            throw "aller voir docteur !"
        } 
    } catch (error) {
        console.log(error);  
    }
}