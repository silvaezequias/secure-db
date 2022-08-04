const fs = require('fs-extra');
const format = require('./format');
const settings = require('../settings.json');

function validate(expected_path, target_file){
  expected_path = format.names(expected_path);
  target_file = format.names([target_file])[0];
  target_file = target_file?.length ? target_file : ['main'];
  
  var arrayPath = ['database', ...expected_path];
  arrayPath.forEach((_, index) => {
    var parent = arrayPath.slice(0, index + 1);
    var current_path = parent.join('/');
    var current_file_state = !fs.existsSync(current_path);
    if (current_file_state) fs.mkdirSync(current_path);
  });

  var final_parents_path = arrayPath.join('/');
  var file_extension = settings.file_extension;
  var file_path = `${final_parents_path}/${target_file}.${file_extension}`;

  if (!fs.existsSync(file_path)) fs.writeFileSync(file_path, '{}');
  return file_path;
};

function exists(path){
  var arrayPath = ['database', ...path]
  var file_path = arrayPath.join('/');
  file_path = `${file_path}.${settings.file_extension}`;
  return fs.existsSync(file_path);
};

function existsDir(path){
  var arrayPath = ['database', ...path]
  var dir_path = arrayPath.join('/');
  return fs.existsSync(dir_path);
};

module.exports = { validate, exists, existsDir };