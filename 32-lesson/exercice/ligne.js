const Cell = require('./cell');

module.exports = class Line {
    constructor() {
        this._cells = [];
        this._cellules.push(new Cell("A"));
        this._cellules.push(new Cell("B"));
        this._cellules.push(new Cell("C"));
        this._cellules.push(new Cell("D"));
        this._cellules.push(new Cell("E"));

    }
    get cells() {
        return this. _cells;
    }
    
}
