const path = require('./path');
const format = require('./format');
const encode = require('../intermediate/encode');
const fs = require('fs');

function write(path, data){
  fs.writeFileSync(path, data);
};

function parseContent(processed_data){
  var result = '{}';
  try { result = JSON.stringify(processed_data, null, '\t'); }
  catch (err){ result = '{}' };
  return result;
};

function main(data, settings, cryptography){
  var parents_path = settings.parents;
  var target_file = settings.name;
  var current_path = path.validate(parents_path, target_file);
  var formatted_content = format.compile(data);
  var parsed_content = parseContent(formatted_content);
  var encoded_content = encode(parsed_content, cryptography);
  write(current_path, encoded_content);
};

module.exports = main;