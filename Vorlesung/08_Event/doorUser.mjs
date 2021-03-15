import {Door} from './Door.mjs'
let door = new Door();

door.on("open", function(){
    console.log("...door is open");
});
door.ring();
console.log("waiting...");
