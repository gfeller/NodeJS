const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


var handler = (req, res) => {
    var query = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/plain'}); /*Ändern nach html*/
    res.end("<html><input value='hallo'></html>");
};
const server = http.createServer(handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
