const fileHandler = require('./file.js');

( async function () {
    console.log(await fileHandler.file("test.txt", 'Hello World!'));
}());
