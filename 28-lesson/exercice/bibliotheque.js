module.exports = class Bibliotheque {
    constructor() 
    {
        this._livres = [];
    }
    get livre(){
        return this._livre;
    }

    ajouterLivre(livre){
        this._livres.push(livre);
    }
    rechercherLivreParTitre(titre){
        var miseSurEtagere = [];
        for (var index = 0; index < this._livres.length; index++) {
            if (this._livres[index].titre == titre) {
                miseSurEtagere.push(this._livres[index]);
            }
        }
        return miseSurEtagere;
    }
    rechercherLivreParCodeBarre(codeBarre){
        var miseSurEtagere = null;
        for (var index = 0; index < this._livres.length; index++) {
            if (this._livres[index].codeBarre == codeBarre) {
                miseSurEtagere = this._livres[index];
            }
        }
        return miseSurEtagere;
    }
}