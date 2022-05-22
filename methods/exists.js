const { fileExtension } = require('../config');
const handler = {path: require('../handler/path')}

module.exports = (identifier, database) => handler.path.exists(identifier, `.${fileExtension}`);
