const { readFileSync } = require('fs-extra');
const { fileExtension } = require('../config');
const { CharToInfinity } = require('./infinity/toInfinity');
const format = require('./format');
const path = require('./path');

module.exports = database_name => {
    var state = path.exists(database_name, `.${fileExtension}`);
    return state ? CharToInfinity(format.json(readFileSync(`${path.resolve(database_name)}.${fileExtension}`).toString())) : {};
}