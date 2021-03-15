import {readFile} from './file.mjs';

readFile("test.txt", 'Hello World!',
    function(err, content) {
        if (err) console.log(err);
        console.log(content)
    }
);
