import fs from 'fs';

function readFile(filename, text, callback) {
    fs.writeFile(filename, text, function (err) {
        if (err) return errorHandler(err, callback);

        fs.readFile(filename, {encoding: 'utf8'}, function (err, content) {
            if (err) return errorHandler(err, callback);

            fs.unlink(filename, function (err) {
                if (err) return errorHandler(err, callback);
                if (callback) callback(err, content);
            });
        });
    });
}


function errorHandler(err, callback) {
    if (callback) callback(err);
}

export {readFile}
