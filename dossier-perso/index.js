const voiture = require('./voiture');
const concessionnaire = require('./concessionnaire');

var concession = new concessionnaire();

var c63 = new voiture(
    "c63",
    true,
    true,
    true,
    false,
)

concession.ajouterVoitures(c63);

// var resultat = new concession(

// )


console.log(concession);
