function myFunc(a, b, fn) {
    setTimeout(function(){
        fn(a + b);
    }, 1000);
}


myFunc(2, 4, console.log);
myFunc(10, 3,  console.error );