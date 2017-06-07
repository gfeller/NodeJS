const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3001;

const handler = function(req, res) {
    res.end("hello world");
    let x = 1;
    while(true) {
        console.log(x++);
    }
};

const server = http.createServer();
server.on("request", handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});