const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], DatabaseSettings) => {
    const saved_data = handler.read(DatabaseSettings);
    var filtered_data = get(saved_data, identifier, []);

    switch (identifier.constructor){
        case String: case Number:
            if (filtered_data.constructor === Array) filtered_data.push(solidData); set(saved_data, identifier, filtered_data);
        break;
    }  
    handler.write(saved_data, DatabaseSettings);
    return get(saved_data, identifier, solidData);
}