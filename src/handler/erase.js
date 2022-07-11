const { removeSync } = require('fs-extra');
const { file_extension } = require("../settings.json");
const path = require('./path');

module.exports = (database_name) => {
    var state = path.exists(database_name, `.${file_extension}`);
    state ? removeSync(path.resolve(database_name) + `.${file_extension}`) : null;
}