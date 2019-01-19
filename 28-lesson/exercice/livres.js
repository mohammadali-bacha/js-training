module.exports = class Livres {
    constructor
        (
            titre,
            auteur,
            codeBarre,
            theme
        ) {
            this._titre = titre;
            this._auteur = auteur;
            this._codeBarre = codeBarre;
            this._theme = theme;
        }
    get titre() {
        return this._titre;
    }
    // set titre(value) {
    //     return this._titre = value;
    // }
    get auteur() {
        return this._auteur;
    }
    // set auteur(value) {
    //     return this._auteur = value;
    // }
    get codeBarre() {
        return this._codeBarre;
    }
    // set codeBarre(value) {
    //     return this._codeBarre = value;
    // }
    get theme() {
        return this._theme;
    }
    // set theme(value) {
    //     return this._theme = value;
    // }
}