/*
This file contains the Invoice class in which we initialize the data
related to an invoice (name,date,numeor,address,account), in addition we initialize
the properties totalHT, totalVAT and totalTTC at 0 and _invoiceLine with an empty table.     
*/

module.exports = class Invoice {
    constructor(
        name,
        number,
        date,
        deposit,
        deliveryAddress,
    ) {
        this._name = name;
        this._numero = number;
        this._date = date;
        this._account = deposit;
        this._deliveryAddress = deliveryAddress;
        this._totalHT = 0;
        this._totalVAT = 0;
        this._totalTTC = 0;
        this._invoiceLine = [];
        this._numberOfLines = 0;
    }
    /*
    We're getting the properties back.
    */
    get name() {
        return this._name;
    }
    get numero() {
        return this._numero;
    }
    get date() {
        return this._date;
    }
    get deposit() {
        return this._account;
    }
    get deliveryAddress() {
        return this._deliveryAddress;
    }
    get totalHT() {
        return this._totalHT;
    }
    get totalVAT() {
        return this._totalVAT;
    }
    get totalTTC() {
        return this._totalTTC;
    }
    /*
    this method allows us to add lines 
    */
    addLines(line) {
        try {
            this._invoiceLine.push(line);
            this._totalHT = 0;
            this._totalTTC = 0;
            this._totalVAT = 0;
    
            for (var index = 0; index < this._numberOfLines.length; index++) {
    
                /*
                the properties above are updated by adding them to the value of the index searched at time t of the totals of each line        
                */
                var tempTotalHT = this._invoiceLine[index].totalHT; //
                var tempTotalVAT = this._invoiceLine[index].totalVAT
                var tempTotalTTC = this._invoiceLine[index].totalTTC;
                
                /// the total including all taxes has not yet been increased, 
                // we calculate the total value including all taxes which will be capitalized
                 if (this._totalTTC + tempTotalTTC > 10000) {
                     throw"";
                 }

                this._totalHT += tempTotalHT;
                this._totalVAT += tempTotalVAT;
                this._totalTTC += tempTotalTTC;
  
            }
            this._numberOfLines = this._invoiceLine.length;
        } catch (error) {
            this._invoiceLine.pop();
            console.log("The invoice amount is greater than $10,000!");
            
        }
    }
    get numberOfLines() { {
        return this. _numberOfLines;
    }
}
}