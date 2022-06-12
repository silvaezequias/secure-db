const fs = require('fs-extra');
const format = require('./format');

function resolve(database_name){return `./database/${format.names(database_name).join('/')}`};
function exists(database_name, extension = ''){return fs.existsSync(resolve(database_name) + extension)};

function active(database_name){
    !exists([true]) ? fs.mkdirSync('./database') : null;
    var databases = database_name.slice(0, -1);
    var state = exists(databases);

    if (!state && database_name.length > 1){
        var temporaryPath = [];
        for (let i = 0; i < databases.length; i++){
            temporaryPath.push(databases[i]);
            if (!exists(temporaryPath)) fs.mkdirSync(resolve(temporaryPath));
        }
    }
}

module.exports = { resolve, exists, active };