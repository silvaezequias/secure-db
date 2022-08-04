const lodashSet = require('lodash/set');
const lodashGet = require('lodash/get');
const save = require('../handler/save');
const read = require('../handler/fetch');
const lodashIndexOf = require('lodash/indexOf');
const lodashFindIndex = require('lodash/findIndex');

function dataBoolean(target){
  if (target?.constructor === Boolean){
    return target ? false : true;
  } else return true
};

function dataArray(value, target){
  value = value.filter(each => {
    return [ String, Array, Object, Boolean, Number]
    .includes(each.constructor);
  });
  var index = lodashIndexOf(value, target);
  var last_index = index < 0 ? lodashFindIndex(value, target) : index;
  var current_item = value[last_index + 1] ? value[last_index + 1] || value[0] : value[0];
  return current_item;
};

function toggle(data_path, value, settings, cryptography){
  var stored_data = read(settings, cryptography);
  if ([String, Number].includes(data_path?.constructor)){
    var target = lodashGet(stored_data, data_path, null);
    var result = target;
    switch (value?.constructor){
      case Boolean: result = dataBoolean(target); break;
      case Array: result = dataArray(value, target); break;
      default: result = value; break;
    };
    lodashSet(stored_data, data_path, result);
  };
  save(stored_data, settings, cryptography);
  return lodashGet(stored_data, data_path, value);
};
module.exports = toggle;