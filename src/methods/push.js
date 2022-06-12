const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = saved_data;

    if (!identifier) throw new TypeError('No identifier specified "[...].push(?)".')
    if (!solidData) throw new TypeError('No value specified "[...].push(..., ?)".')

    switch (identifier.constructor){
        case String: case Number: 
            filtered_data = get(saved_data, identifier, []);
            if (filtered_data.constructor === Array){
                filtered_data.push(solidData);
                filtered_data = set(saved_data, identifier, filtered_data);
            }
        break;
    }
    handler.write(filtered_data, database.name);
    return get(saved_data, identifier, solidData);
}