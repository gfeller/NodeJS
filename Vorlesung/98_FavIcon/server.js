const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === "/") {
        fs.readFile("./index.html", function (err, cont) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(cont);
        });
    }
    else{
        let assetUrl = "./assets"+request.url;
        fs.exists(assetUrl, function(exists) {
                if (exists) {
                    fs.readFile(assetUrl,  function (err, cont) {
                        response.end(cont);
                    });
                }
                else {
                    console.log(request.url);
                    response.statusCode = 404;
                    response.end("not found");
                }
            }
        );
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});