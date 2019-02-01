let _ = require('lodash');



let app = require('./app').start(8080);


app.on('root', function (response) {
    response.write('Je suis à la racine');
})

// let monEcouteur = new EventEmitter();

// monEcouteur.on('saute', function () {
//     console.log("J'ai sauté");  
// })

// monEcouteur.emit('saute'); 

