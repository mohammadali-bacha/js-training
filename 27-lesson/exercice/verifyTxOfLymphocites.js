module.exports = function checkTxOfLymphocites(txOfLymphocites) {
    try {
        var message = "Nothing to report";
        if (txOfLymphocites > 1 && txOfLymphocites < 2) {
            throw "go to the doctor!"
        }
        if (txOfLymphocites >= 2 && txOfLymphocites < 2.5) {
            throw "Viral infection!"
        }
        if (txOfLymphocites >= 2.5) {
            throw "Liver problem!"
        } 

    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}
