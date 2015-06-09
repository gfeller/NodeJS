var http = require('http');
var fs = require('fs');
var url = require('url');

var number = require('../U1/numbers.js');
var file = require('../U2/file.js');

var handler = function (req, res) {

    if(req.url == "/sendFile"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var stream = fs.createReadStream("./ToSend.html" );
        stream.pipe(res);
    }
    else if(req.url.indexOf("/number") == 0){
        var queryObject = url.parse(req.url,true).query;
        number(Number(queryObject["min"]), Number(queryObject["max"]));
        res.end("OK");
    }
    else if(req.url == "/file"){
        file.file("test.txt", "random text", function(err, content){
            res.end(err ? err :  content);
        })
    }
    else if(req.url.indexOf( "/hello" ) == 0){
        res.writeHead(200, {'Content-Type': 'text/plain'});

        var queryObject = url.parse(req.url,true).query;
        res.end("you said: "+queryObject["text"]);
    }
};

var server = http.createServer(handler);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');