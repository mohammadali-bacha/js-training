var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('*', (req, res) => {
    res.send(req.url)
});
app.listen(8080, function () {
    console.log("serveur running on port " + this.address().port);
});


