console.log("B1");
const a = require("./a");
console.log("B2");
module.exports = {showObject : function(){ console.log("B",a)}};