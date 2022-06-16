const { fileExtension } = require('../config');
const handler = { path: require('../handler/path') }

module.exports = ([identifier]) => {
    return handler.path.exists(identifier, `.${fileExtension}`);
}
