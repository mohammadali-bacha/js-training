module.exports = class Bibliotheque {
    constructor(
        livres,
    ) {
        this._livres = [];;
    }
    get livre(){
        return this._livre;
    }

    ajouterLivres(livres){
        this._livres.push(livres);
    }
}