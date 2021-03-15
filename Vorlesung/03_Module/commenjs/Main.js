let counter = require("./Counter");
console.log(counter.get());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

console.log("-----------------------");
let counter2 = require("./Counter");
console.log(counter2.get());
console.log(counter2.count());
console.log(counter2.count());
console.log(counter2.count());

console.log("-----------------------");
let counter3 = require("./Counter2")();
console.log(counter3.get());
console.log(counter3.count());
console.log(counter3.count());
console.log(counter3.count());

console.log("-----------------------");
let counter4 = require("./Counter2")(-10);
console.log(counter4.get());
console.log(counter4.count());
console.log(counter4.count());
console.log(counter4.count());