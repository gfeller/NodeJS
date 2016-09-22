console.log("A1");
var b = require("./b");
console.log("A2");

module.exports = {showObject : function(){  console.log("A", b)}};