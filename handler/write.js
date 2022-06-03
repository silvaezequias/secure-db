const { writeFileSync } = require("fs-extra");
const { fileExtension } = require('../config.js');
const { InfinityToChar } = require('./infinity/toChar');
const format = require('./format');
const path = require('./path');

module.exports = (data, database_name) => {
    path.active(database_name);
    path.exists(database_name.slice(0, -1)) ? 
    writeFileSync(`${path.resolve(database_name)}.${fileExtension}`, 
    format.stringfy(InfinityToChar(data))) : null;
}