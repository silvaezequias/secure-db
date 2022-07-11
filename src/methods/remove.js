const eraser = require('../handler/erase');
const eraserdir = require('../handler/erasedir');
const readdir = require('../handler/readdir');

module.exports = (name) => { 
    eraser(name);
    for (let i = 0; i < name.length; i++){
        name.pop();
        if (readdir(name).length == 0) eraserdir(name);
    }
}