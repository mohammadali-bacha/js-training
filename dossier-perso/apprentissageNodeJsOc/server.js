var http = require('http');
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});

jeu.on('gameover', function (message) {
    console.log(message, name, age);
});
var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
jeu.emit('nouveaujoueur', 'Mario', 35); // Envoie le nom d'un nouveau joueur qui arrive et son âge
server.listen(8080);

server.close();