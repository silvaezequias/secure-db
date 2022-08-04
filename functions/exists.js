const path = require('../handler/path');
function exists(data_path){
  var stat = path.exists(data_path);
  return stat;
};
module.exports= exists;