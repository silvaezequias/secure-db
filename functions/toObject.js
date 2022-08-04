const read = require('../handler/fetch');

function toObject(settings, cryptography){
  return read(settings, cryptography);
};
module.exports = toObject;
