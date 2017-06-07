console.log("A1");
const b = require("./b");
console.log("A2");

module.exports = {showObject : function(){  console.log("A", b)}};