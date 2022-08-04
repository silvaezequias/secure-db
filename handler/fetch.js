const path = require('./path');
const format = require('./format');
const decode = require('../intermediate/decode');
const fs = require('fs');

function read(path){
  return fs.readFileSync(path).toString();
};
function parseContent(file_content){
  var result = undefined;
  try { result = JSON.parse(file_content); }
  catch (err){ result = undefined };
  return result;
}

function main(settings, cryptography){
  var parents_path = settings.parents;
  var target_file = settings.name;
  var current_path = path.validate(parents_path, target_file);
  var file_content = read(current_path);
  var parsed_content = parseContent(file_content);
  var decoded_content = !parsed_content ? decode(file_content, cryptography) : parsed_content;
  var formatted_content = format.decompile(decoded_content);

  return formatted_content;
}

module.exports = main;