const { get } = require('lodash');
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
            switch (solidData.constructor){
                case String: case Number:
                if (filtered_data.indexOf(solidData) >= 0)
                filtered_data.splice(filtered_data.indexOf(solidData), 1);
                break;
                case Object: case Array:  
                const objectEntries = filtered_data.map(eachObj => Object.entries(eachObj)[0]);
                    const dataEntries = Object.entries(solidData)[0];
                    var indexOf = -1;

                    for (let i = 0; i < objectEntries.length && indexOf < 0; i++){
                        var [objKey, objValue] = objectEntries[i];
                        var [dataKey, dataValue] = dataEntries;
                        if (objKey == dataKey && objValue == dataValue) indexOf = i;
                    }
                    if (indexOf >= 0) filtered_data.splice(indexOf, 1);
                    break;
                }
            }
        break;
    }
    handler.write(saved_data, database.name);
    return get(saved_data, identifier, solidData);
}