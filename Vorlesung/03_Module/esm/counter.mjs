export class Counter{
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



