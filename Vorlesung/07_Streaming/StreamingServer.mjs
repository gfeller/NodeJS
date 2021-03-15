import http from 'http';
import fs from 'fs';


const handler = function (req, res) {
    if (req.url === "/") {
        console.log("readFile");
        res.writeHead(200, {'Content-Type': 'video'});
        const x = import.meta.url;
        let stream = fs.createReadStream("./Wildlife.wmv");
        stream.pipe(res);
    }
};

const server = http.createServer(handler);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
