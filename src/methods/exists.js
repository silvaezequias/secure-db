const { file_extension } = require('../settings.json');
const handler = { path: require('../handler/path') }

module.exports = ([identifier]) => {
    return handler.path.exists(identifier, `.${file_extension}`);
}
