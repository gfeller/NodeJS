console.log("-----------------------");
var counter5 = require("./counter3-ES6")();
console.log(counter5.get());
console.log(counter5.count());
console.log(counter5.count());
console.log(counter5.count());

console.log("-----------------------");
var counter6 = new (require("./counter3-ES6")).Counter(20); /*Klammern wichtig - ansonsten 2 Zeilen*/
console.log(counter6.get());
console.log(counter6.count());
console.log(counter6.count());
console.log(counter6.count());