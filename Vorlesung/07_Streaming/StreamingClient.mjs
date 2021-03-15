import http from 'http';

let req = http.request( {hostname: "localhost", port: 1337, path : "/", method: "GET"}, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.on('data', function (chunk) {
       console.log('BODY: ' + chunk.length);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
req.end();
