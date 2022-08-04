const lodashHas = require('lodash/has');
const read = require('../handler/fetch');

function has(data_path, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var result = null;

  switch (data_path?.constructor){
    case String: case Boolean:
    case Number: result = lodashHas(stored_data, data_path); break;
    case Array: result = data_path.map(path => lodashHas(stored_data, path)); break;
  };
  return result;
};
module.exports = has;