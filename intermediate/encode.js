var { SECURE_DB = null } = process.env;
var output = 'hex';
var mode = 'soft';
var key = null;

function parseOutput(expected_output) {
  switch (expected_output?.toLowerCase()) {
    case 'base64': case 'base64url': output = 'base64url'; break;
    case 'hex': default: output = 'hex'; break;
  }
};

function parseMode(expected_mode) {
  switch (expected_mode?.toLowerCase()) {
    case 'deep': case 'hard': mode = 'deep'; break;
    case 'soft': case 'basic': mode = 'soft'; break;
  };
};

function parseKey(expected_key = SECURE_DB) {
  expected_key = expected_key?.trim?.();
  expected_key = expected_key?.replace(/[\n]/g, '');

  if (expected_key === null || expected_key === undefined) return 204;
  if (expected_key.length < 5 || expected_key.length >= 200) return 411;
  return key = expected_key;
};

function deepCoding(data) {
  var dataBytes = data.split('');
  var keyBytes = key.split('');
  var result = new String();

  for (let byte of dataBytes) {
    let byteCode = byte.charCodeAt(0);
    let keyByteCode = keyBytes.map(b => b.charCodeAt(0));
    let reducedKeyBytes = keyByteCode.reduce((current, next) => current + next);
    let ghostByteCode = String.fromCharCode(byteCode + reducedKeyBytes);
    result += ghostByteCode;
  }
  return result;
};

function softCoding(data) {
  var dataBytes = data.split('');
  var result = new Array();

  dataBytes.forEach((byte, index) => {
    let byteCode = byte.charCodeAt(0);
    let keyByteCode = key[Math.min(index, key.length - 1)].charCodeAt(0);
    result.push(byteCode + keyByteCode);
  })
  return JSON.stringify(result);
};

function setOutput(final_structure) {
  return Buffer.from(final_structure).toString(output);
};

function main(data, settings) {
  if (settings?.constructor === String) settings = { key: settings };
  if (!settings || settings.constructor != Object) return data;
  
  var status_code = parseKey(settings?.key);
  var error_codes = {
    204: () => { throw new Error('Required to enter a non-empty string for the Key.'); },
    411: () => { throw new Error('The key must be 5 to 200 characters long.'); }
  };

  error_codes[status_code]?.();
  parseOutput(settings.output);
  parseMode(settings.mode);

  var enconding_modes = {
    deep: () => deepCoding(data),
    soft: () => softCoding(data)
  };
  var encoded_data = enconding_modes[mode]();
  var final_structure = { mode, output, result: encoded_data };
  var result_string = JSON.stringify(final_structure);
  var integrated_output = setOutput(result_string);
  return integrated_output;
}

module.exports = main;