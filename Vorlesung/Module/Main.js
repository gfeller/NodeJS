var counter = require("./counter");
console.log(counter.get());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

console.log("-----------------------");
var counter2 = require("./counter");
console.log(counter2.get());
console.log(counter2.count());
console.log(counter2.count());
console.log(counter2.count());

console.log("-----------------------");
var counter3 = require("./counter2")();
console.log(counter3.get());
console.log(counter3.count());
console.log(counter3.count());
console.log(counter3.count());

console.log("-----------------------");
var counter4 = require("./counter2")(-10);
console.log(counter4.get());
console.log(counter4.count());
console.log(counter4.count());
console.log(counter4.count());


console.log("-----------------------");
var counter5 = require("./counter3-ES6")();
console.log(counter5.get());
console.log(counter5.count());
console.log(counter5.count());
console.log(counter5.count());

console.log("-----------------------");
var counter6 = require("./counter3-ES6")(-10);
console.log(counter6.get());
console.log(counter6.count());
console.log(counter6.count());
console.log(counter6.count());