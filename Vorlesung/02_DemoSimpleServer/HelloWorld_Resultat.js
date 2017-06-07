const http = require('http');
const url = require('url');


const hostname = '127.0.0.1';
const port = 3000;

const handler = function(request, response) {
    let queryObject = url.parse(request.url,true).query;
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Echo: ${queryObject["text"]}`);
};

const server = http.createServer();
server.on("request", handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});