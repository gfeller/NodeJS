console.log("START");
loadFile("hello-world.pdf").then(console.log, console.error);
loadFile("hello-world.docx").then(console.log, console.error);

/*
loadFile("hello-world.docx")
    .then(console.log)
    .then(() => console.log("OK"))
    .catch((err) => console.log("ERROR", err))
    .then(() => console.log("FINALLY"));
*/
console.log("ENDE");





function loadFile(file) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (file == null || !file.endsWith(".pdf")) {
                reject({message: `File ${file} not found`});
            } else {
                resolve({message: `File ${file} found`, content: "Hello World"});
            }
        }, 2000);
    });
}
