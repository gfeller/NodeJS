function myFunc(a, b, fn) {
    setTimeout(function(){
        fn(a + b);
    }, 5000);
}


console.log("start");
myFunc(2, 4, console.log);
myFunc(10, 3,  console.error );
console.log("ende");