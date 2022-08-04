const read = require('../handler/fetch');

function all(options, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var data_entries = Object.entries(stored_data);
  return data_entries;
};
module.exports = all;