const fs = require('fs-extra');

function resolve(database_name){return `./database/${database_name.join('/')}`};
function exists(database_name, extension = ''){return fs.existsSync(resolve(database_name) + extension)};

function active(database_name){
    !exists([]) ? fs.mkdirSync('./database') : null;
    var databases = database_name.slice(0, -1);
    var state = exists(databases);

    if (!state && database_name.length > 1){
        var temporarayPath = './database';
        for (let i = 0; i < databases.length; i++){
            temporarayPath += '/' + databases[i];
            fs.mkdirSync(temporarayPath);
        }
    }
}

module.exports = { resolve, exists, active };