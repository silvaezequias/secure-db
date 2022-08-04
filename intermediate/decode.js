var { SECURE_DB = null } = process.env;
var key = null;

function parseKey(expected_key = SECURE_DB) {
  expected_key = expected_key?.trim?.();
  expected_key = expected_key?.replace(/[\n]/g, '');

  if (expected_key === null || expected_key === undefined) return 204;
  if (expected_key.length < 5 || expected_key.length >= 200) return 411;
  return key = expected_key;
};

function manageOutputModule(expected_data) {
  var result = null;
  var expected_outputs = {
    base64url: Buffer.from(expected_data, 'base64url').toString('utf-8'),
    hex: Buffer.from(expected_data, 'hex').toString('utf-8')
  }
  try { result = JSON.parse(expected_outputs.base64url); }
  catch (err) { result = null };
  try { result = JSON.parse(expected_outputs.hex); }
  catch (err) { result = result };
  return result;
};

function deepDecoding(data) {
  var dataBytes = data.split('');
  var keyBytes = key.split('');
  var result = new String();

  for (let byte of dataBytes) {
    let byteCode = byte.charCodeAt(0);
    let keyByteCode = keyBytes.map(b => b.charCodeAt(0));
    let reducedKeyBytes = keyByteCode.reduce((current, next) => current + next);
    let ghostByteCode = String.fromCharCode(byteCode - reducedKeyBytes);
    result += ghostByteCode;
  }
  return result;
}

function softDecoding(data) {
  var dataBytes = parseFinalData(data);
  var result = '';

  dataBytes?.forEach?.((byteCode, index) => {
    let keyByteCode = key[Math.min(index, key.length - 1)].charCodeAt(0);
    let char = String.fromCharCode(byteCode - keyByteCode);
    result += char;
  });
  return result;
};

function parseFinalData(final_data) {
  var result = null;
  try { result = JSON.parse(final_data); }
  catch (err) { result = null };
  return result;
}

function main(data, settings) {
  if (settings?.constructor === String) settings = { key: settings };
  
  var status_code = parseKey(settings?.key);
  var error_codes = {
    204: () => { throw new Error('Required to enter a non-empty string for the Key.'); },
    411: () => { throw new Error('The key must be 5 to 200 characters long.'); }
  };

  error_codes[status_code]?.();
  var structure = manageOutputModule(data);

  structure === null ? (() => {
    throw new Error('The data is corrupted and cannot be managed.');
  })() : undefined;

  var decoding_modes = {
    deep: () => deepDecoding(structure.result),
    soft: () => softDecoding(structure.result),
  }
  var result = decoding_modes[structure.mode]();
  var parsed_result = parseFinalData(result);

  parsed_result === null ? (() => {
    throw new Error('The Key entered is invalid or the data is corrupted.');
  })() : undefined;

  return parsed_result;
}

module.exports = main;