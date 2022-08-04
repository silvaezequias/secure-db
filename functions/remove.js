const eraser = require('../handler/erase');
const dir = require('../handler/dir');

function remove(path){
  eraser.file(path);
  for (let i = 0; i < path.length; i++){
    (dir.read(path.slice(0, -(i))).length == 0) && eraser.dir(path.slice(0, -(i)));
  };
};
module.exports = remove;