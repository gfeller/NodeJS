// default
import counterA from './counter.mjs';

console.log(counterA.get());
console.log(counterA.count());
console.log(counterA.count());
console.log(counterA.count());

console.log("-----------------------");

// Module is only loaded once
// named export
import {get, add as count} from './counter.mjs';

console.log(get());
console.log(count());
console.log(count());
console.log(count());


// Module is only loaded once
console.log("-----------------------");
import counterFnA from './counter2.mjs';

const counter2a = counterFnA();

console.log(counter2a.get());
console.log(counter2a.count());
console.log(counter2a.count());
console.log(counter2a.count());

console.log("-----------------------");
import counterFnB from './counter2.mjs';

const counter2b = counterFnB();

console.log(counter2b.get());
console.log(counter2b.count());
console.log(counter2b.count());
console.log(counter2b.count());


console.log("-----------------------");
import Counter3 from './counter3.mjs';
import {Counter as Counter3b} from './counter3.mjs';
import {createCounter} from './counter3.mjs';

console.log(new Counter3(10).count());
console.log(new Counter3b(10).count());
console.log(createCounter(10).count());



