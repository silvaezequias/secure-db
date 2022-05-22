const eraser = require('../handler/erase');
const eraserdir = require('../handler/erasedir');
const readdir = require('../handler/readdir');

module.exports = (identifier, database) => { 
    eraser(database.name);
    for (let i = 0; i < database.name.length; i++){
        database.name.pop();
        if (readdir(database.name).length == 0) eraserdir(database.name);
    }
}