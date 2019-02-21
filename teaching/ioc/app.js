

const privateMethod = Symbol('privateMethod');

class SomeClass {

    constructor(){
        this._count = 10
    }

    someMethod() {
        console.log('somemethod');
        this[privateMethod]();
        
    }

    [privateMethod] () {
      console.log('hello');
    }


}

var Container = require("typedi").Container;
var someClass = Container.get(SomeClass);
someClass.someMethod();