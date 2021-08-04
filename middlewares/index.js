require('dotenv').config();

const corsOption = {

    origin: function (origin,callback) {

        if (process.env.whitelistdirections.indexOf(origin) !== -1) {

            callback (null,true);

        }else {

            callback(new Error('ERROR EN [CORSOPTIONS] (NO AUTORIZADO)') );
        }
    }
}

module.exports = corsOption;