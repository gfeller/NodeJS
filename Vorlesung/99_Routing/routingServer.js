const http = require('http');
const fs = require('fs');
const url = require('url');

const words = [];

const handler = function (req, res) {
    if(req.url === "/"){
        console.log("readFile");
        res.writeHead(200, {'Content-Type': 'text/html'});
        let stream = fs.createReadStream("./ToSend.html" );
        stream.pipe(res);
    }
    else if(req.url === "/readFile"){
        console.log("readFile");
        fs.readFile("./ToSend.html", function(err, cont){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(cont);
        });
    }
    else if(req.url === "/error"){
        fs.readFile("./wronghtml.html", function(err, cont){
            if(err){
               res.writeHead(404, {'Content-Type': 'text/plain'});
               res.end(err.toString());
               return;
            }
            res.end(cont);
        });
    }
    else if(req.url.indexOf( "/hello" ) === 0){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let queryObject = url.parse(req.url,true).query;
        let text = queryObject["text"];
        words.push(text);
        res.end("you said: "+ text);
    }
    else if(req.url=== "/data"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({data: words}));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("not found");
    }
};

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(handler);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});