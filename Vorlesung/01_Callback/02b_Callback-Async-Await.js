( async function () {
    console.log("START");
    const result = await loadFile("hello-world.pdf");
    console.log(result.message);
    try
    {
        const result = await loadFile("hello-world.docx")
        console.log(result);
    }
    catch(e)
    {
        console.log("ERROR", e.message);
    }
    console.log("ENDE");




    async function loadFile(file) {
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
}());
// console.log("END-FILE")
