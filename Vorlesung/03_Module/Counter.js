let counter = 0;
function add(){ return ++counter; }
function get(){ return counter; }

module.exports = { count : add, get : get};


