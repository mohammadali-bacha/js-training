module.exports = class Livre {
    constructor
        (title,
         author,
         barcode,
         theme
        ) {
            this.title = title;
            this._author = author;
            this.barcode = codeBarre;
            this._theme = theme;
        }
    get title() {
        return this.title;
    }
    get author() {
        return this._author;
    }
    get codeBarre() {
        return this.barcode;
    }
    get theme() {
        return this._theme;
    }
}