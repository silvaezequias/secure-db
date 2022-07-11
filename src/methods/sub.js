const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], DatabaseSettings) => {
    const saved_data = handler.read(DatabaseSettings);
    var filtered_data = get(saved_data, identifier, null);

    switch (identifier.constructor){
        case String: case Number: 
            switch (solidData.constructor){
                case String: case Number:
                    if (!isNaN(filtered_data) && !isNaN(solidData))
                    set(saved_data, identifier, Number(filtered_data) - Number(solidData));
                break;
            }
        break;
    }
    handler.write(saved_data, DatabaseSettings);
    return get(saved_data, identifier, solidData);
}