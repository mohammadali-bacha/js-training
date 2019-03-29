module.exports = class Dad {
    constructor(name){
        this._son = [];
        this._name = name;
    }
    get name (){
        return this._name;
    }
    get son(){
        return this._son;
    }
    addFSon(son){
        this._son.push(son);
    }
}