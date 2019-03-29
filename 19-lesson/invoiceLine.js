/*
In this file, we export the class Invoice Lines in which we pass in parameters the quantity, the unit price
and the VAT rate (which are non-calculated data) then we initialize the corresponding properties + the properties 
with calculated data such as total excluding VAT, VAT and VAT. To retrieve this data, we set up getters and 
setters to modify them.
*/

module.exports = class InvoiceLine {
    constructor(
        quantity,
        UnitPrice,
        txVAT,
    ) {
        this._quantity = quantity;
        this._UnitaryPrice = UnitPrice;
        this._txVAT = txVAT;
        this._totalHT = this._UnitaryPrice * this._quantity;
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }

    get txVAT() {
        return this._txVAT;
    }

    set txVAT(value) {
        this._txVAT = value;
        /*
        need to update the total ownership incl. VAT because it depends on totalVAT which itself depends on VAT incl. 
        */
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
/*
need to update all properties because totalTTC and totalTVA depend on totalHT which depends on quantity.
*/
        this._totalHT = this._UnitaryPrice* this._quantity;
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }

    get UnitPrice(){
        return this._UnitaryPrice;
    }

    set UnitPrice(value) {
        this._UnitaryPrice= value;
/*
need to update all properties because totalTTC and totalVAT depend on totalHT which depends on unit price.
*/
        this._totalHT = this._UnitaryPrice * this._quantity;
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }
/*
We get the properties back:
*/
    get totalHT() {
        return this._totalHT;
    }
    get totalVAT() {
        return this._totalVAT;
    }
    get totalTTC() {
        return this._totalTTC;
    }
}

// return all data 
// setter that the non-calculated data
