var util = require('util');
var EventEmitter = require('events').EventEmitter;


var Door = function()
{
    var self = this;
    self.ring = function(){
        setTimeout(function() {
            self.emit('open');
        }, 100);
    };
};
util.inherits(Door, EventEmitter);

module.exports = {
    createDoor :  function () { return new Door(); }
};
