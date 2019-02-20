function resolveAfter2secondes(){
    console.log('Debut de la promesse lente');

    return new Promise(resolve => {
            setTimeout(() => {
                resolve(20);
                console.log('Resolution de la promesse lente');
            }, 4000)
        }
    )
}

function resolveAfter1secondes(){
    console.log('Debut de la promesse rapide');

    return new Promise(resolve => {
            setTimeout(() => {
                resolve(10);
                console.log('Resolution de la promesse rapide');
            }, 1000)
        }
    )
}

async function sequentialStart(){
    console.log('==sequantiel==');

    const slow = await resolveAfter2secondes();
    const fast = await resolveAfter1secondes();

    console.log(slow);
    console.log(fast);
    
}

async function concurrentStart(){
    console.log('==concurrent==');

    const slow = resolveAfter2secondes();
    const fast = resolveAfter1secondes();

    console.log(await slow);
    console.log(await fast);
    
}

function stillSerial(){
    console.log('==Début concurrentiel avec Promise.all==');
    Promise.all([resolveAfter2secondes(), resolveAfter1secondes()]).then((messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    });
}




//sequentialStart();

//concurrentStart()

stillSerial();




