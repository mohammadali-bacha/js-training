var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.setHeader('Content-type', 'text/plain');
    res.send("Vous êtes à l'accueil, que puis-je pour vous ?");
});

app.get('/sous-sol', function(req,res){
    res.setHeader('Content-type', 'text/plain');
    res.send('Vous êtes dans mon frigo, ces canettes sont à moi !');
});

app.get('/etage/1/chambre', function(req,res){
    res.setHeader('Content-type', 'text/plain');
    res.send("Hé ho, c'est privé ici");
});

app.get('/etage/:etagenum/chambre', function(req,res){
    // res.setHeader('Content-type', 'text/plain');
    res.render('chambre.ejs', {etage: req.params.etagenum});
})
app.get('/compter/:nombre', function(req,res){
 var noms = ['Robert', 'Jacques','David'];
 res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
})
app.use(function(req,res, next){
    res.setHeader('Content-type', 'text/plain');
    res.status(404).send('Page introuvable');
})

app.listen(8080);

