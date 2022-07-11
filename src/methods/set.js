const { set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([ identifier, solidData ], DatabaseSettings) => {
    var saved_data = handler.read(DatabaseSettings);

    switch (identifier.constructor){
        case Number: case String: case Boolean: set(saved_data, identifier, solidData);  break;
        case Array: saved_data = Object.assign({}, identifier); break;
        case Object: saved_data = identifier; break;
    }

    handler.write(saved_data, DatabaseSettings);
    return solidData ? solidData : identifier;
}