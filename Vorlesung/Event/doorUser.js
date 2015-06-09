var door =  require("./Door").createDoor();

door.on("open", function(){
    console.log("door is open");
});

door.ring();