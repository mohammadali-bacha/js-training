module.exports = function checkTxOfGlucose(txOfInsuline) {
    try {
        var message = "Nothing to report";
        if (txOfInsuline > 1 && txOfInsuline < 2) {
            throw "warn the nurse";
        }
        if (txOfInsuline > 2.5) {
            throw "prevent SAMU";
        }

    } catch (error) {
        message = error;
    } finally {
        console.log(message);
    }
}