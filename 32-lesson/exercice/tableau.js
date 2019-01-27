module.exports = class Tableau{
    constructor(){
        this._tableau = [];
        this._lignes = [];
    }
    get(){       
    }

    set(){
    }

    ajouterLignes(number){
        for (let index = 0; index < number; index++) {
            this._tableau.push(this._lignes);
        }
    }
}