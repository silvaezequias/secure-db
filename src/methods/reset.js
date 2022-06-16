const { set, get } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}
module.exports = ([identifier], database) => {
    var saved_data = handler.read(database)
    var new_data = {};
    switch (identifier.constructor){
        case String: case Number: case Boolean:
            set(new_data, identifier, get(saved_data, identifier, null));
        break;
        case Array:
            identifier.filter(each => each && [String, Boolean, Number].includes(each.constructor)).forEach(each => {
                set(new_data, each, get(saved_data, each, null));
            })
        break;
    }
    handler.write(new_data, database);
    return new_data;
}