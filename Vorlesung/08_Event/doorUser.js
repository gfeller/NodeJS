var door =  require("./Door").createDoor();
//var door =  new (require("./Door").Door);
//var door =  require("./ES5_Door").createDoor();

door.on("open", function(){
    console.log("door is open");
});

door.ring();