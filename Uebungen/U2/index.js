const fileHandler = require('./file.js');

fileHandler.file("test.txt", 'Hello World!',
    function(err, content) {
        if (err) console.log(err);
        console.log(content)
    }
);
