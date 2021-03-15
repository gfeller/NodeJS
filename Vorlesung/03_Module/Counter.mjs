let counter = 0;

function add() {
    return ++counter;
}
function get() {
    return counter;
}
// default export
export default {count: add, get: get};
// named
export {add, get};


