const set = require('lodash')['set'];
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([ identifier, solidData ], database) => {
    const saved_data = handler.read(database.name);
    var new_data = saved_data;

    if (!identifier) throw new TypeError('No identifier specified "[...].set(?)".');
    switch (identifier.constructor){
        case Number: case String: new_data = solidData ? set(saved_data, identifier, solidData) : saved_data; break;
        case Array: new_data = Object.assign({}, identifier); break;
        case Object: new_data = identifier; break;
    }

    handler.write(new_data, database.name);
}