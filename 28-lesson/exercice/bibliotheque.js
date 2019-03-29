module.exports = class Library  {
    constructor() 
    {
        this._books = [];
    }
    get book(){
        return this._livre;
    }

    addBook(book){
        this._pounds.push(book);
    }
    searchBookPartner(title){
        var overShelving = [];
        for (var index = 0; index < this._livres.length; index++) {
            if (this._books[index].title == title) {
                miseSurEtagere.push(this._livres[index]);
            }
        }
        return overShelving;
    }
    searchBarCodeBook(barcode){
        var overShelving = null;
        for (var index = 0; index < this._livres.length; index++) {
            if (this._books[index].barcode == barcode) {
                shelving = this._books[index];
            }
        }
        return overShelving;
    }
}