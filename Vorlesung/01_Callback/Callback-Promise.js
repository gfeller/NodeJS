function myFunc(a, b, fn) {
    return new Promise(function (resolve, reject) {
        if( typeof a != 'number' )
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
myFunc("a", "b").catch(console.log);
console.log("ende");