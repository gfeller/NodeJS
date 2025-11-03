( async function () {
    console.log("START");
    try
    {
        const result = await loadFile("hello-world.pdf");
        console.log(result.message);

        const result1 = await loadFile("hello-world.docx")
        console.log(result1);
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

/*

(function () {
    console.log("START");

    loadFile("hello-world.pdf")
        .then(function (result) {
            console.log(result.message);
            return loadFile("hello-world.docx");
        })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (e) {
            console.log("ERROR", e.message);
        })
        .finally(function () {
            console.log("ENDE");
        });

    function loadFile(file) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (file == null || !file.endsWith(".pdf")) {
                    reject({ message: `File ${file} not found` });
                } else {
                    resolve({ message: `File ${file} found`, content: "Hello World" });
                }
            }, 2000);
        });
    }
})();
*/
