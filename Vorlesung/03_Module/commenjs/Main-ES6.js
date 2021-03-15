console.log("-----------------------");
let counter5 = require("./Counter3-ES6")();
console.log(counter5.get());
console.log(counter5.count());
console.log(counter5.count());
console.log(counter5.count());

console.log("-----------------------");
let counter6 = new (require("./Counter3-ES6")).Counter(20); /*Klammern wichtig - ansonsten 2 Zeilen*/
console.log(counter6.get());
console.log(counter6.count());
console.log(counter6.count());
console.log(counter6.count());