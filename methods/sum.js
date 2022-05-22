const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = saved_data;

    if (!identifier) throw new TypeError('No identifier specified "[...].sum(?)".')
    if (!solidData) throw new TypeError('No value specified "[...].sum(..., ?)".')

    switch (identifier.constructor){
        case String: case Number: 
            switch (solidData.constructor){
                case String: case Number:
                filtered_data = get(saved_data, identifier, null);  
                if (!isNaN(filtered_data) && !isNaN(solidData))
                filtered_data = set(saved_data, identifier, Number(filtered_data) + Number(solidData));
                break;
            }
        break;
    }
    handler.write(saved_data, database.name);
    return get(saved_data, identifier, solidData);
}