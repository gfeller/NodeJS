function loadFile(file, callback) {
    setTimeout(function () {
        callback({message: "File found", content: "Hello World"});

    }, 2000);
}


console.log("START");
loadFile("hello-world.pdf", (data) => console.log(data.message))
console.log("END");
