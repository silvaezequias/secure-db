const { fileExtension } = require('../config');
const handler = {readdir: require('../handler/readdir')}

module.exports = ([database, callback]) => {
    var result = handler.readdir(database)
    .filter(target => target.endsWith(`.${fileExtension}`))
    .map(target => target.slice(0, -(fileExtension.length + 1)));
    return callback && callback.constructor === Function ? callback(result) : result;
}