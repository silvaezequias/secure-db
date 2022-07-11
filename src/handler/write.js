const { writeFileSync } = require('fs-extra');
const { file_extension } = require('../settings.json');
const { InfinityToChar } = require('./infinity/toChar');
const encode = require('./cryptography/encode');
const format = require('./format');
const path = require('./path');

module.exports = (data, { name: database_name, cryptography }) => {
    path.active(database_name);
    var final_data = format.stringfy(InfinityToChar(data));

    switch(cryptography.constructor){
        case Boolean: 
        final_data = 
            cryptography ? 
            encode(final_data, { cryptography: { key: process.env ? process.env.SECURE_DB : undefined }}) : 
            final_data;
        break;
        case Object: final_data = encode(final_data, { cryptography });
    }

    writeFileSync(`${path.resolve(database_name)}.${file_extension}`, final_data);
}