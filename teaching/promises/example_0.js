function faireQqc(){

    return new Promise(

        function(resolve, reject){

            if(20 > 5){
                resolve(10);
            }
            else{
                reject(11);
            }
        }

    );
}
//const promise = faireQqc().then((value) => { console.log(value) })

function faireQqcALAncienne(successCallback, failureCallback){
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  }
  
  function successCallback(résultat) {
    console.log("L'opération a réussi avec le message : " + résultat);
  }
  
  
  function failureCallback(erreur) {
    console.log("L'opération a échoué avec le message : " + erreur);
  }
  
  //faireQqcALAncienne(successCallback, failureCallback);

  const promise = faireQqc();
  const promise2 = promise.then( x => { return (x*10)});
  //faireQqc().then(successCallback, failureCallback);
  //console.log(promise2);
  promise2.then( x => {
      console.log(x)
  })