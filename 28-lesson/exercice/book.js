module.exports = class Livre {
    constructor
        (title,
         author,
         barcode,
         theme
        ) {
            this._title = title;
            this._author = author;
            this._barcode = barcode;
            this._theme = theme;
        }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get barcode() {
        return this._barcode;
    }
    get theme() {
        return this._theme;
    }
}