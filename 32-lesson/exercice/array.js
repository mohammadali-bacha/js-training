module.exports = class Array {
    constructor() {
        this._lines =[];
    }
    addLine(line){
        this._lines.push(line);
    }
    get lines(){
        return this._lines;
    }
}
