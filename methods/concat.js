const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = saved_data;

    if (!identifier) throw new TypeError('No identifier specified "[...].concat(?)".')
    if (!solidData) throw new TypeError('No value specified "[...].concat(..., ?)".')

    switch (identifier.constructor){
        case String: case Number: 
            filtered_data = get(saved_data, identifier, null);
            if (typeof constructor === 'null') filtered_data = set(saved_data, identifier, solidData.toString())
            else filtered_data = set(saved_data, identifier, `${filtered_data}${solidData}`);
        break;
    }
    handler.write(filtered_data, database.name);
    return get(saved_data, identifier, solidData);
}