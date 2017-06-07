const fs = require('fs');

function publicFile(filename, text, callback) {
    fs.writeFile(filename, text, function(err) {
        if (err) return privateHandleError(err, callback);

        fs.readFile(filename, {encoding: 'utf8'}, function(err, content) {
            if (err) return privateHandleError(err, callback);

            fs.unlink(filename, function(err) {
                if (err) return privateHandleError(err, callback);
                if (callback) callback(err, content);
            });
        });
    });
}


function privateHandleError(err, callback) {
    if (callback) callback(err);
}

module.exports = {file : publicFile};
