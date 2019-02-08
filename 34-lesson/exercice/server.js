import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger("dev"));
// app.get('*', (req,res) => {
//     res.status(200).send(
//         {message: 'bienvenue'}
//     );
//     next();
// });
var router = require('./routes/index');              
// get an instance of the express Router

app.use(router);


app.listen(8080, function () {
    console.log("serveur running on port " + this.address().port);
});


