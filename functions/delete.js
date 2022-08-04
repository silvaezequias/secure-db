const lodashUnset = require('lodash/unset');
const save = require('../handler/save');
const read = require('../handler/fetch');

function $delete(data_path, settings, cryptography) {
  var stored_data = read(settings, cryptography);

  switch (data_path.constructor) {
    case String: case Number:
      lodashUnset(stored_data, data_path);
    break;
    case Array:
      var items = data_path.filter(data => [String, Number].includes(data.constructor));
      items.forEach(item => lodashUnset(stored_data, item));
    break;
  };
  save(stored_data, settings, cryptography)
};
module.exports = $delete;