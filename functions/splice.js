const lodashSet = require('lodash/set');
const lodashGet = require('lodash/get');
const save = require('../handler/save');
const read = require('../handler/fetch');
const lodashIndexOf = require('lodash/indexOf');
const lodashFindIndex = require('lodash/findIndex');

function splice(data_path, value, settings, cryptography){
  var stored_data = read(settings, cryptography);
  if ([String, Number].includes(data_path?.constructor)){
    let target = lodashGet(stored_data, data_path, {});
    if (target?.constructor === Array){
      switch (value?.constructor) {
        case String: case Number: case Boolean:
          target.splice(lodashIndexOf(target, value), 1);
          break;
        case Object: case Array:
          target.splice(lodashFindIndex(target, value), 1);
          break;
      };
      lodashSet(stored_data, data_path, target);
    };
  };
  save(stored_data, settings, cryptography);
  return lodashGet(stored_data, data_path, value);
};
module.exports = splice;