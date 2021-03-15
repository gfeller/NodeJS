class Counter{
    constructor(startValue = 0){
        this.counter = startValue
    }

    count(){
        return ++this.counter;
    }

    get(){
        return this.counter;
    }
}

module.exports = (...args) => new Counter(...args); /*Nur eine Factory exportieren*/
module.exports.Counter = Counter; /*Ganze Klasse exportieren*/



