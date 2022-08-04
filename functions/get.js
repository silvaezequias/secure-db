const lodashGet = require('lodash/get');
const read = require('../handler/fetch');

function get(data_path, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var result = null;

  switch (data_path.constructor){
    case Boolean: case Number: case String:
      result = lodashGet(stored_data, data_path, null);
    break;
    case Array:
      result = data_path.map(each_path => {
        return lodashGet(stored_data, each_path, null);
      });
    break;
  };
  return result;
};
module.exports = get;