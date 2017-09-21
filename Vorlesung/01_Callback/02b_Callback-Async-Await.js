( async function () {
    async function myFunc(a, b) {
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
    console.log(await myFunc(2, 4));
    try
    {
        console.log(await myFunc("a", "b"));
    }
    catch(e)
    {
        console.log(e);
    }
    console.log("ende");
}());