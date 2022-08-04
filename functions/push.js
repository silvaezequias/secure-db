const lodashSet = require('lodash/set');
const lodashGet = require('lodash/get');
const save = require('../handler/save');
const read = require('../handler/fetch');

function sortData(data){
  var result = null;
  switch (data?.constructor){
    case String: case Array:
    case Number: case Boolean:
    case Object: result = data; break;
  };
  return result;
};

function push(data_path, value, settings, cryptography){
  var stored_data = read(settings, cryptography);
  var target_data = lodashGet(stored_data, data_path, []);

  if ([String, Number].includes(data_path?.constructor)) {
    if (target_data?.constructor === Array) {
      target_data.push(sortData(value));
      lodashSet(stored_data, data_path, target_data);
    };
  };
  save(stored_data, settings, cryptography);
  return target_data;
};
module.exports = push;