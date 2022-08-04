const { readdirSync } = require('fs-extra');
const format = require('./format');

function read(paths){
  var names = format.names(paths)
  paths = ['database', ...names];
  try {
    return readdirSync(paths.join('/'));
  } catch(err){
    return [];
  };
};

module.exports = { read }; 