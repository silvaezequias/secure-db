const lodashGet = require('lodash/get');
const lodashSet = require('lodash/set');
const save = require('../handler/save');
const read = require('../handler/fetch');

function dataString(solid, filtered){
  const pos = {
    [String]: () => filtered += solid,
    [Boolean]: () => filtered += `${solid}`,
    [Object]: () => filtered = { [filtered]: solid },
    [Array]: () => { solid.unshift(filtered); filtered = solid },
    [Number]: () => filtered = isNaN(filtered) ? `${filtered}${solid}` : +filtered + solid
  };
  pos[solid.constructor]?.();
  return filtered;
};

function dataArray(solid, filtered){
  const pos = {
    [String]: () => filtered.push(solid),
    [Number]: () => filtered.push(solid),
    [Object]: () => filtered.push(solid),
    [Boolean]: () => filtered.push(solid),
    [Array]: () => filtered = filtered.concat(solid)
  };
  pos[solid.constructor]?.();
  return filtered;
};

function dataBoolean(solid, filtered){
  const pos = {
    [String]: () => filtered = `${filtered}${solid}`,
    [Number]: () => filtered = `${filtered}${solid}`,
    [Object]: () => filtered = { [filtered]: solid },
    [Boolean]: () => filtered = (solid || !filtered),
    [Array]: () => { solid.unshift(filtered); filtered = solid }
  };
  pos[solid.constructor]?.();
  return filtered;
};

function dataNumber(solid, filtered){
  const pos = {
    [Number]: () => filtered = +solid + filtered,
    [Object]: () => filtered = { [filtered]: solid },
    [Boolean]: () => filtered = `${filtered}${solid}`,
    [Array]: () => { solid.unshift(filtered); filtered = solid },
    [String]: () => filtered = isNaN(solid) ? `${filtered}${solid}` : +solid + filtered
  };
  pos[solid.constructor]?.();
  return filtered;
};

function dataObject(solid, filtered){
  const pos = {
    [String]: () => filtered[solid] = solid,
    [Number]: () => filtered[solid] = solid,
    [Boolean]: () => filtered[solid] = solid,
    [Array]: () => Object.assign(filtered, solid),
    [Object]: () => Object.assign(filtered, solid)
  };
  pos[solid.constructor]?.();
  return filtered;
};

function add(data_path, solid_data, settings, cryptography) {
  var stored_data = read(settings, cryptography);
  
  if ([String, Number].includes(data_path?.constructor)) {
    let filtered_data = lodashGet(stored_data, data_path, null);
    if (filtered_data === null) {
      switch (solid_data?.constructor){
        case String: case Number:
        case Object: case Boolean:
        case Array: lodashSet(stored_data, data_path, solid_data);
        break;
      };
    };

    var result = solid_data;
    switch (filtered_data?.constructor){
      case Boolean: result = dataBoolean(solid_data, filtered_data); break;
      case String: result = dataString(solid_data, filtered_data); break;
      case Number: result = dataNumber(solid_data, filtered_data); break;
      case Object: result = dataObject(solid_data, filtered_data); break;
      case Array: result = dataArray(solid_data, filtered_data); break;
    };
    lodashSet(stored_data, data_path, result);
  };
  save(stored_data, settings, cryptography);
  return lodashGet(stored_data, data_path, solid_data);
};

module.exports = add;