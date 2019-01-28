const Applestore = require('./applestore');
const Iphone = require('./iphone');
const Ipad = require('./ipad');
const Macbook = require('./macbook');

var applestore = new Applestore();

var iphone = new Iphone(
    256,
    6.1,
    3,
    "noir",
    "iOS 12"
);

var ipad = new Ipad(
    128,
    9,
    4,
    "blanc",
    "iOS 12"
);

var macbook = new Macbook(
    256,
    13.3,
    8,
    'gris sideral',
    "macOS Mojave"
);



applestore.ajouterMateriel(ipad);
applestore.ajouterMateriel(iphone);
applestore.ajouterMateriel(macbook);

console.log(applestore);
