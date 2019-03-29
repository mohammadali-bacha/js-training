module.exports = class Library  {
    constructor() 
    {
        this._books = [];
    }
    get book(){
        return this._books;
    }

    addBook(book){
        this._books.push(book);
    }
    searchBookPartner(title){
        var overShelving = [];
        for (var index = 0; index < this._books.length; index++) {
            if (this._books[index].title == title) {
                overShelving.push(this._books[index]);
            }
        }
        return overShelving;
    }
    searchBarCodeBook(barcode){
        var overShelving = null;
        for (var index = 0; index < this._books.length; index++) {
            if (this._books[index].barcode == barcode) {
                overShelving = this._books[index];
            }
        }
        return overShelving;
    }
}