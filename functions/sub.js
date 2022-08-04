const lodashGet = require('lodash/get');
const lodashSet = require('lodash/set');
const save = require('../handler/save');
const read = require('../handler/fetch');

function sub(data_path, value, settings, cryptography){
  var stored_data = read(settings, cryptography);

  if ([String, Number].includes(data_path?.constructor)){
    if ([String, Number].includes(value?.constructor)){
      let target = lodashGet(stored_data, data_path, 0);
      if (!isNaN(target) && !isNaN(value)){
        lodashSet(stored_data, data_path, (+target) - (+value));
      };
    };
  };
  save(stored_data, settings, cryptography);
  return lodashGet(stored_data, data_path, value);
};
module.exports = sub;