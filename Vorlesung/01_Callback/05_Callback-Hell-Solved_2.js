( async function () {
    let text = "text";

    async function exists(path) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(Math.random() > 0.5);
            }, 1);
        });
    }


    async function write(path, newText) {
        return new Promise(function (resolve, reject) {
            let ok = Math.random() > 0.5;
            if (ok) {
                text = newText;
            }
            setTimeout(function () {
                if (ok) {
                    resolve();
                }
                else {
                    reject()
                }
            }, 1);
        });

    }

    async function read(path) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(text);
            }, 1);
        });
    }

    async function send(text) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log(text);
                resolve(true);
            }, 1);
        });
    }

    let path = "file.txt";
    if(await exists(path))
    {
        console.log(await send());
    }
    else {
        try{
            await write(path, "hallo");
            console.log(await send(await read(path)));
        }
        catch (e)
        {
            console.log("error");
        }

    }
}());