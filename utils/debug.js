
const fs = require('fs');

module.exports = {

    save: function (flag, place) {
        let stringSave = '';

        stringSave = `
        <h5> ${new Date().toISOString()} </h5> \n
        <h4 style="color: red;"> ${place} </h4> \n
        <p> ${JSON.stringify(flag)} </p> \n
        <hr> \n
        `;        

        fs.appendFile(__dirname + '/../public/cache/error.htm', stringSave, function (err) {
            if (err) {
                console.log(err);
            } else {
                // done
            }
        });
    }
}