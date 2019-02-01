let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session')

// Moteur de template 
app.set('view engine', 'ejs');

//Middleware

app.use('/assets', express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  }))
  app.use(require('./middlewares/flash'))

//Routes
app.get('/', (request, response ) => {
    let Message = require('./models/message')
    Message.all(function(messages){
        response.render('pages/index', {messages: messages})
    })
    console.log(request.session);
    
    response.render('pages/index')
    
})

app.post('/', (request, response) => {
if (request.body === undefined || request.body .message === '') {
    request.flash('error', "vous n'avez pas poste de mesg").error = "il y a une erreur"
    response.redirect('/')

}  else{
    let Message = require('./models/message')
    Message.create(request.body.message, function () {
        request.flash('success', "merci")
        response.redirect('/')

    })
}  

})

app.get('/message/:id', (request, response ) =>{
    process. env.NODE_ENV
    console.log(process. env.NODE_ENV);
    
let Message = require('./models/message')
Message.find(equest.params.id, function ( message){
     response.render('messages/show', {message: message})
})
})

app.listen(8080);