let http = require('http');
let fs = require('fs');
let server = http.createServer();


server.on('request', (request, response) => { // on peut mettre function et enlever : => . c'est la meme chose
    fs.readFile('indemx.html', (err, data) => {
        if (err) {
            throw err;
        }
        response.writeHead(200, {
            'Content-type': 'text/html; charset=utf8'
        })
        response.end(data);
    })
})
server.listen(8080);