const eraser = require('../handler/erase');
const eraserdir = require('../handler/erasedir');
const readdir = require('../handler/readdir');

module.exports = (database) => { 
    eraser(database);
    for (let i = 0; i < database.length; i++){
        database.pop();
        if (readdir(database).length == 0) eraserdir(database);
    }
}