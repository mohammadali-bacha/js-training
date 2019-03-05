const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    constructor(){
    super()
        this._name = null;
    }
    
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

}


const myEmitter = new MyEmitter();

myEmitter.name = "JKL";


myEmitter.on('NewEvent', () => {
  console.log('an event occurred!');
});
var response = myEmitter.emit('NewEvent');
console.log(response);