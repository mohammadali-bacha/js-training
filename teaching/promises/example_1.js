var promise = new Promise(function(resolve, reject) {
    resolve(10);
  });
  
  promise.then(val => {
    console.log(val); //
    return val + 2;
  }).then(val => {
    console.log(val); //
    return val + 3;
  }).then(val => {
    console.log(val); //
  })