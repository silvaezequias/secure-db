const { file_extension } = require('../settings.json');
const dir = require('../handler/dir');

function getDatabases(names, callback){
  var result = dir.read(names)
  .filter(target => target.endsWith(`.${file_extension}`))
  .map(target => target.slice(0, -(file_extension.length + 1)));

  return callback?.constructor === Function ? callback(result) : result;
};
module.exports = getDatabases;