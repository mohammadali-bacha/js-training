module.exports = function EuroDollarsconversion(value, txChange) {
    var convertedvalue = 0;
    var valueCalculated  = (value * txChange);

    if (value < 100) {
        convertedvalue = valueCalculated - 5;

    } else {
        convertedvalue = valueCalculated - (3 / 100) * valueCalculated;

    }

    return convertedvalue ;
}