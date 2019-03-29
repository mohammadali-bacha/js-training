module.exports = function EuroDollarsconversion(value, txChange) {
    varConvertedvalue = 0;
    var valueCalculated  = (value * txChange);

    if (value < 100) {
        valueConverted = valueCalculated - 5;

    } else {
        ConvertedValue = CalculatedValue - (3 / 100) * CalculatedValue;

    }

    return valueConverted ;
}