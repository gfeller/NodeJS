var text = "text";

function exists(path, fn) {
    setTimeout(function(){
        fn(Math.random() > 0.5);
    }, 1);
}


function write(path, newText, fn) {
    var ok = Math.random() > 0.5;
    if(ok)
    {
        text = newText;
    }
    setTimeout(function(){
        fn(ok);
    }, 1);
}

function read(path, fn) {
    setTimeout(function(){
        fn(text);
    }, 1);
}

function send(text, fn) {
    setTimeout(function(){
        console.log(text);
        fn(true);
    }, 1)
}

var path = "file.txt";
//Idee: Überprüfen ob File vorhanden ist, falls ja => zurückgeben ansonsten anlegen danach den Inhalt zurücksenden
exists(path, (exists) =>
    {
       if(exists){
           read(path, (text) => {
               send(text, (ok) =>  console.log(ok))
           })
       }
       else{
           write(path, "hallo", (ok) => {
               if(ok)
               {
                   read(path, (text) => send(text, (ok) =>  console.log(ok)))
               }
               else
               {
                   console.log("error");
               }
           })
       }
    }
);

