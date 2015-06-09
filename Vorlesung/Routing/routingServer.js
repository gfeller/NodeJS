var http = require('http');
var fs = require('fs');
var url = require('url');

var handler = function (req, res) {
  //  res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.url == "/"){
        console.log("readFile")
        res.writeHead(200, {'Content-Type': 'text/html'});
        var stream = fs.createReadStream("./ToSend.html" );
        stream.pipe(res);
    }
    else if(req.url == "/readFile"){
        console.log("readFile")
        fs.readFile("./ToSend.html", function(err, cont){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(cont);
        });
    }
    else if(req.url == "/error"){
        fs.readFile("./wronghtml.html", function(err, cont){
            if(err){
               res.writeHead(404, {'Content-Type': 'text/plain'});
               res.end(err.toString());
               return;
            }
            res.end(cont);
        });
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