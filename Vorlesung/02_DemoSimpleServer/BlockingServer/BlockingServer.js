const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


var handler = (req, res) => {
    res.end("hello world");
    var x = 1;
    while(true) {
        console.log(x++);
    }

};
const server = http.createServer(handler);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
