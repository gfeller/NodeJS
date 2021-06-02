const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const handler = function (request, response) {
    const url = new URL(request.url, `http://${request.headers.host}`);
    let searchParams = url.searchParams;
    let params = querystring.parse(request.url.split("?")[1])

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Echo: ${searchParams.get("text")} ${params.text}`);
};

const server = http.createServer();
server.on("request", handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
