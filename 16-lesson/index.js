class Invoice {
    constructor(
        /*
We initialize the parameters in the constructor:
        */
        name,
        number, 
        date, 
        txVAT,
        UnitPrice,
        quantity,
        deliveryAddress,
        deposit,
        ){
        /*
We initialize the properties in the constructor:
        */
        this._name = name;
        this._numero = number; 
        this._date = date;
        this._txVAT = txVAT;
        this._UnitaryPrice = UnitPrice;
        this._quantity = quantity;
        this._account = deposit;
        this._deliveryAddress = deliveryAddress;

        this._totalHT = this._UnitaryPrice * this._quantity;
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }
        /*
Here, we use getters and setters to retrieve the values (get) and then the
change (set).
        */

    get totalHT(){
        return this. _totalHT;
    } 

    set txVAT(value){
        this._txVAT = value;
        this.updateInvoice();
    }

    get txTva(){
        return this._txVAT;
    }

    set quantity (value){
        this._quantity = value;
        this.updateInvoice();

    }

    get quantity(){
        return this._quantity;
    }

    updateInvoice(){ 
        this._totalHT = this._UnitaryPrice * this._quantity;
        this._totalVAT = this._totalHT * this._txVAT;
        this._totalTTC = this._totalHT + this._totalVAT;
    }
    UpdateName(name){
        this._name = name;
    }

}

class DeliveryAddress {
    constructor(
        street, 
        city, 
        postalCode)
    {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }
}

var address = new DeliveryAddress(
    "rue de la republique",
    "Lyon",
    69003);

var invoice = new Invoice(
    "Purchase of equipment",
    1801,
    "01/02/2019",
    0.20,
    200.00,
    5.00,
    address,
    150.00,
     );

     
console.log(invoice);

/*
Case "Modification of the quantity"
*/

invoice.quantity = 6 ;
console.log(invoice)

/*
Case "Modification of the tx"
*/

invoice.txVAT = 0.1 ;
console.log(invoice)

/*
"Name update" case
*/

invoice.UpdateName("toto");
console.log(invoice)

//console.log(invoice.calculation);


// console.log("-------------------------------------------------------------------");

// invoice.txVAT = 8.00

// console.log(invoice);

// console.log("-------------------------------------------------------------------");

// Invoice.quantity = 3

// console.log(invoice);
