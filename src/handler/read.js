const { readFileSync } = require('fs-extra');
const { file_extension } = require('../settings.json');
const { CharToInfinity } = require('./infinity/toInfinity');
const decode = require('./cryptography/decode');
const path = require('./path');

module.exports = ({ name: database_name, cryptography }) => { var result;
    var state = path.exists(database_name, `.${file_extension}`);

    result = state ? (() => {
        var data = readFileSync(`${path.resolve(database_name)}.${file_extension}`).toString() || '{}';

        try { data = JSON.parse(data) } 
        catch (err) {
            try { switch(cryptography.constructor){
                case Boolean: data = JSON.parse(cryptography ? (() => {
                    return decode(data, { cryptography: { key: process.env ? process.env.SECURE_DB : undefined }});
                })(): data); break;
                case Object: data = JSON.parse(decode(data, { cryptography })); break;
                default: throw new Error('Bug #79930XA - Please report it.'); break;
            }} catch(err){ 
                throw new Error(
                    !cryptography ? 'This database has encryption enabled.' : 
                    'The security key entered is invalid or the file is corrupt.'
                )
            };
        }
        return data
    })() : {};

    return CharToInfinity(result);
}