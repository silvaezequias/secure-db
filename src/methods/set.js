const { set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([ identifier, solidData ], database) => {
    var saved_data = handler.read(database);

    switch (identifier.constructor){
        case Number: case String: case Boolean: set(saved_data, identifier, solidData);  break;
        case Array: saved_data = Object.assign({}, identifier); break;
        case Object: saved_data = identifier; break;
    }

    handler.write(saved_data, database);
    return solidData ? solidData : identifier;
}