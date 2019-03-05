class Homecontroller{
    static sum(a,b){
      return a + b;
    }
  }
  
  const handler = {
    apply: function(target, thisArg, argumentsList) {
      console.log(`Calculate sum: ${argumentsList}`);
      // expected output: "Calculate sum: 1,2"
  
      return target(argumentsList[0], argumentsList[1]) * 10;
    }
  };
  
  var proxyHome = new Proxy(Homecontroller.sum, handler);
  
  console.log(Homecontroller.sum(1, 2));
  // expected output: 3
  console.log(proxyHome(1, 2));
  // expected output: 30