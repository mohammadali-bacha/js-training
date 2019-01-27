const Applestore = require('./applestore');
const Iphone = require('./iphone');
const Ipad = require('./ipad');
const Macbook = require('./macbook');

var applestore = new Applestore();

var iphone = new Iphone();

var ipad = new Ipad();

var macbook = new Macbook();



applestore.ajouterMateriel(ipad)