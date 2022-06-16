const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = get(saved_data, identifier, []);

    switch (identifier.constructor){
        case String: case Number:
            if (filtered_data.constructor === Array) filtered_data.push(solidData); set(saved_data, identifier, filtered_data);
        break;
    }  
    handler.write(saved_data, database.name);
    return get(saved_data, identifier, solidData);
}