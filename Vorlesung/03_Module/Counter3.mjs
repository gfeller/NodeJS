// named export
export class Counter {
    constructor(startValue = 0) {
        this.counter = startValue
    }

    count() {
        return ++this.counter;
    }

    get() {
        return this.counter;
    }
}

// default export
export default Counter;

// named export
export const createCounter = (...args) => new Counter(...args);



