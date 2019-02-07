const { Pool, Client } = require('pg')
var express = require('express'),
     path = require('path'),
     bodyParser = require('body-parser'),
     cons = require('consolidate'),
     dust = require('dustjs-helpers'),
     pg = require('pg'),
     pwd = require('../recipebook/process.env'),
app = express();



// DB CONNECT STRING
// const connectionString = 'postgresql://bachamohammad-ali:' + pwd.DB_PASS + '@localhost/recipebookdb';
const connectionString = 'postgresql://test:nfHH94Zaq2vc@localhost:5432/recipebookdb';

const pool = new Pool({
     connectionString: connectionString,
   })

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
     pool.connect((err, client, release) => {
          if (err) {
            return console.error('Error acquiring client', err.stack)
          }
          client.query('SELECT * FROM recipes', (err, result) => {
            release()
            if (err) {
              return console.error('Error executing query', err.stack)
            }
            res.render('index', {recipes: result.rows});
          //   done();
                console.log(result.rows)
          })
        })
     // pool.connect((connect, (err, client, release) => {
     //      if (err) {
     //           return console.error('error fetching client form pool', err.stack);
     //      }
     //      client.query('SELECT * FROM recipes',  (err, result) => {
     //           release();
     //           if (err) {
     //                return console.error('error running query', err.stack);
     //           }
     //           res.render('index', {recipes: result.rows});
     //           done();
       
     //      });
     //   });   
});

////////

//////////////

//Server
app.listen(3000, function () {
     console.log('Server started on port 3000');

});