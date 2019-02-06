var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers 
// statiques (middleware chargé de base)
.use(favicon(__dirname + 'public/favicon.co'))
.use(function(req,res){
    res.send('Hello');
});

app.listen(8080);
