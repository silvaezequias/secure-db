const { file_extension } = require('../settings.json');
const handler = {readdir: require('../handler/readdir')}

module.exports = ([database_name, callback]) => {
    var result = handler.readdir(database_name)
    .filter(target => target.endsWith(`.${file_extension}`))
    .map(target => target.slice(0, -(file_extension.length + 1)));
    return callback && callback.constructor === Function ? callback(result) : result;
}