const { writeFileSync } = require("fs-extra");
const { fileExtension } = require('../config.js');
const format = require('./format');
const path = require('./path');

module.exports = (data, database_name) => {
    path.active(database_name);
    writeFileSync(`${path.resolve(database_name)}.${fileExtension}`, format.stringfy(data));
}