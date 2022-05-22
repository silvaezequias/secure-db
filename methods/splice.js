const { get, set, stubArray } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = get(saved_data, identifier, {});

    if (!identifier) throw new TypeError('No identifier specified "[...].splice(?)".')
    if (!solidData) throw new TypeError('No value specified "[...].splice(..., ?)".')

    switch (identifier.constructor){
        case String: case Number: 
            if (filtered_data.constructor === Array){
                if (filtered_data.indexOf(solidData) >= 0) 
                filtered_data.splice(filtered_data.indexOf(solidData), 1);
            }
        break;
    }

    handler.write(set(saved_data, filtered_data, null), database.name);
    return get(saved_data, identifier, solidData);
}