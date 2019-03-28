/*
Dans ce fichier, nous avons exporté la classe AdresseDeLivraison dans laquelle nous passons en paramètres 
la rue, le code postal et la ville puis nous initialisons  les  propriétés correspondantes. 
*/

module.exports = class AdresseDeLivraison {
    constructor(
        rue,
        code,
        ville
    ) {
        this.rue = rue;
        this.code = code;
        this.ville = ville;
    }
}