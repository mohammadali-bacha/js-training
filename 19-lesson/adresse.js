/*
In this file, we have exported the DeliveryAddress class in which we pass in parameters 
the street, the postal code and the city and then we initialize the corresponding properties. 
*/

module.exports = class DeliveryAddress  {
    constructor(
        street,
        code,
        city
    ) {
        this.street = street;
        this.code = code;
        this.city = city;
    }
}
