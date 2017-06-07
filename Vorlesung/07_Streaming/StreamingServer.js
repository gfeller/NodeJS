const http = require('http');
const fs = require('fs');
const url = require('url');

const handler = function (req, res) {
    if(req.url === "/"){
        console.log("readFile");
        res.writeHead(200, {'Content-Type': 'video'});
        let stream = fs.createReadStream("./Wildlife.wmv" );
        stream.pipe(res);
    }
};

const server = http.createServer(handler);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');