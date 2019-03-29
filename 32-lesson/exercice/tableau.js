module.exports = class Table {
    constructor() {
        this._lines =[];
    }
    addLine(line){
        this._lignes.push(line);
    }
    get lines(){
        return this._lignes;
    }
}
