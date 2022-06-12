const { removeSync } = require("fs-extra");
const { fileExtension } = require("../config");
const path = require('./path');

module.exports = database_name => {
    var state = path.exists(database_name, `.${fileExtension}`);
    state ? removeSync(path.resolve(database_name) + `.${fileExtension}`) : null;
}