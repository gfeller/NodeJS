var http = require('http');
var fs = require('fs');
var url = require('url');

var handler = function (req, res) {
    if(req.url == "/"){
        console.log("readFile");
        res.writeHead(200, {'Content-Type': 'video'});
        var stream = fs.createReadStream("./Wildlife.wmv" );
        stream.pipe(res);
    }
};

var server = http.createServer(handler);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');