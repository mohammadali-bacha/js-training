const voiture = require('./voiture');
const concessionnaire = require('./concessionnaire');

var concession = new concessionnaire();

var voiture1 = new voiture(
    "c63",
    true,
    true,
    true,
    false,
)

concession.ajouterVoitures(voiture1);

// var resultat = new concession(

// )


console.log(concession);
