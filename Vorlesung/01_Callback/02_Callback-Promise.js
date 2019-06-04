function myFunc(a, b) {
    return new Promise(function (resolve, reject) {
        if( typeof a !== 'number' )
        {
            reject("NaN")
        }
        else {
            setTimeout(function () {
                    resolve(a + b);
            }, 2000);
        }
    });
}

console.log("start");
myFunc(2, 4).then(console.log);
myFunc(10, 3).then(console.log);
myFunc("A", "B").then(console.log, console.error);

myFunc("a", "b")
    .then(console.log)
    .then(() => console.log("OK"))
    .catch((err) => console.log("ERROR", err))
    .then(() => console.log("finally"));


console.log("ende");