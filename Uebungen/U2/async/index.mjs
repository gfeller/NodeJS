import {readFile} from './file.mjs';

console.log(await readFile("test.txt", 'Hello World!'));
