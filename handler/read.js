const { readFileSync } = require('fs-extra');
const { fileExtension } = require('../config');
const format = require('./format');
const path = require('./path');

module.exports = database_name => {
    var state = path.exists(database_name, `.${fileExtension}`);
    return state ? format.json(readFileSync(`${path.resolve(database_name)}.${fileExtension}`).toString()) : {};
}