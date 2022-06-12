const { readdirSync } = require('fs-extra');
const path = require('./path');
module.exports = database_name => {try { return readdirSync(path.resolve(database_name)) } catch(err){ return []}}