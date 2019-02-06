var express = require('express'),
     path = require('path'),
     bodyParser = require('body-parser'),
     cons = require('consolidate'),
     dust = require('dustjs-helpers'),
     pg = require('pg'),
     pwd = require('../recipebook/process.env')
app = express();

// DB CONNECT STRING
const connect = 'postgresql://bachamohammad-ali:' + pwd.DB_PASS + '@localhost/recipebookdb';

//Assign Dust Engine to .dust Files
app.engine('dust', cons.dust);

// Set default Ext .dust

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, '/public')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: false
}));

app.get('/', function (req, res) {
     // PG CONNNECT
     pg.connect(conString, function (err, client, done) {
          if (err) {
               return console.error('error fetching client form pool', error);
          }
          client.query('SELECT $1 ::int AS number', ['1'], function (err, result) {
               done();
               if (err) {
                    return console.error('error running query', err);
               }
               console.log(result.rows[0].number);
          });
     });
});

//Server
app.listen(3000, function () {
     console.log('Server started on port 3000');

});