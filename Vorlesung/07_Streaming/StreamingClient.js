const http = require("http");
//1337, '127.0.0.1'
let req = http.request( {hostname: "localhost", port: 1337, path : "/", method: "GET"}, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  //  res.setEncoding('utf8');
    res.on('data', function (chunk) {
       console.log('BODY: ' + chunk.length);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
req.end();