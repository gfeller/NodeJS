const EventEmitter = require('events').EventEmitter;

class Door extends EventEmitter
{
    constructor(){
        super();
    }
    ring(){
        setTimeout(() => {
            this.emit('open');
        }, 1000);
    };
}

module.exports = {
    createDoor :  function () { return new Door(); }
    /*,Door: Door*/
};
