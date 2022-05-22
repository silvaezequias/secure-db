const { removeSync } = require("fs-extra");
const path = require('./path');

module.exports = database_name => {
    var state = path.exists(database_name,);
    state ? removeSync(path.resolve(database_name)) : null;
}