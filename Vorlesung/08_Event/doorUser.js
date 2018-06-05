let door =  require("./Door").createDoor();
//let door =  new (require("./Door").Door);

door.on("open", function(){
    console.log("...door is open");
});
door.ring();
console.log("waiting...");