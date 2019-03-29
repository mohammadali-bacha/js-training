const Cell = require('./cell');

module.exports = class Line {
    constructor() {
        this._cells = [];
        this._cells.push(new Cell("A"));
        this._cells.push(new Cell("B"));
        this._cells.push(new Cell("C"));
        this._cells.push(new Cell("D"));
        this._cells.push(new Cell("E"));

    }
    get cells() {
        return this. _cells;
    }
    
}
