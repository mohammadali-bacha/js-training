module.exports = class Livre {
    constructor
        (titre,
         auteur,
         codeBarre,
         theme
        ) 
        {
            this._titre = titre;
            this._auteur = auteur;
            this._codeBarre = codeBarre;
            this._theme = theme;
        }
    get titre() {
        return this._titre;
    }
    get auteur() {
        return this._auteur;
    }
    get codeBarre() {
        return this._codeBarre;
    }
    get theme() {
        return this._theme;
    }
}