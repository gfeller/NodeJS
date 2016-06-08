const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


var handler = function (request, response) {
    var queryObject = url.parse(request.url,true).query;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World. Dein Text: '  + queryObject["text"]);
};

const server = http.createServer(handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
