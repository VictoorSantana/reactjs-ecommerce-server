
const fs = require('fs');

module.exports = {

    save: function (flag, place) {
        let stringSave = '';

        stringSave = '-------' + '\n';
        stringSave += new Date().toISOString() + '\n';
        stringSave += place + '\n';
        stringSave += JSON.stringify(flag) + '\n';
        stringSave += '\n';
        stringSave += '-------';
        stringSave += '\n';

        fs.appendFile(__dirname + '/../public/cache/error.txt', stringSave, function (err) {
            if (err) {
                console.log(err);
            } else {
                // done
            }
        });
    }
}