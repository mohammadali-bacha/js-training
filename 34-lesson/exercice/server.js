var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

app.listen(1900, function (){
    console.log("serveur running on port " + this.address().port); 
});



