let door =  require("./Door").createDoor();
//let door =  new (require("./Door").Door);
//let door =  require("./ES5_Door").createDoor();

door.on("open", function(){
    console.log("...door is open");
});
door.ring();
console.log("waiting...");