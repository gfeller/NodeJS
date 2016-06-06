var text = "text";

function exists(path) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(Math.random() > 0.5);
        }, 1);
    });
}


function write(path, newText) {
    return new Promise(function (resolve, reject) {
        var ok = Math.random() > 0.5;
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

function read(path) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(text);
        }, 1);
    });
}

function send(text) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(text);
            resolve(true);
        }, 1);
    });
}

var path = "file.txt";
exists(path)
    .then(
        (ok)=> {
            if (ok) {
                read(path)
                    .then(send)
                    .then(console.log)
            }
            else {
                write(path, "hallo")
                    .then(
                        ()=>read(path)
                            .then(send)
                            .then(console.log),
                        ()=> console.log("error")
                    )
            }
        }
    );
