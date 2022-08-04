const { removeSync } = require('fs-extra');
const { file_extension } = require('../settings.json');
const path = require('./path');

function file(database_path){
  var file_state = path.exists(database_path);
  var arrayPath = ['database', ...database_path];
  var file_path = arrayPath.join('/');
  file_path = `${file_path}.${file_extension}`;
  file_state && removeSync(file_path);
};

function dir(section_path){
  var section_state = path.existsDir(section_path);
  var arrayPath = ['database', ...section_path];
  var database_path = arrayPath.join('/');
  section_state && removeSync(database_path);
};

module.exports = { file, dir };