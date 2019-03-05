const EventEmitter = require('events');

class Command {}


class CommandHandler extends EventEmitter {

    handle(command){
        console.log(command)
    }


}