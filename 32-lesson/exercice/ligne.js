module.exports = class Ligne{
    constructor(
        name,
    ){
        this._name =name;
        }
        get name(){
            return this._name;
        }
}
