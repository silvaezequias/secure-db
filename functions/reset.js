const lodashSet = require('lodash/set');
const lodashGet = require('lodash/get');
const save = require('../handler/save');
const read = require('../handler/fetch');

function reset(data_path_to_keep, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var paths = data_path_to_keep.flat(Infinity);
  var new_data = {};

  paths = paths.filter(name => [String, Number].includes(name?.constructor));
  paths = paths.map(name => name.toString());
  paths.forEach(name => {
    lodashSet(new_data, name, lodashGet(stored_data, name, null));
  });
  save(new_data, settings, cryptography);
  return new_data;
};
module.exports = reset;