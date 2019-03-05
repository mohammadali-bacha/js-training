
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
class MyEventHandler{

  constructor(){
  }

  handle(command){
    command.name = "BONJOUR";
  }
  get result(){
    return this._result;
  }
}

const command = {name: ""}
const myEventHandler = new MyEventHandler();




//Assign the event handler to an event:
eventEmitter.on('scream', command => {
  myEventHandler.handle(command);
});

//Fire the 'scream' event:
eventEmitter.emit('scream', command);

console.log(command);