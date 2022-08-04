const lodashSet = require('lodash/set');
const save = require('../handler/save');
const read = require('../handler/fetch');

function set(data_path, value, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var result = null;

  switch (data_path.constructor){
    case Number: case String: case Boolean:
      lodashSet(stored_data, data_path, value);
      result = value;
    break;
    case Array: case Object:
      stored_data = Object.assign({}, data_path);
      result = data_path;
    break;
  };
  save(stored_data, settings, cryptography);
  return result;
};
module.exports = set;