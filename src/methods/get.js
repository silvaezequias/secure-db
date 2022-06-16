const get = require('lodash')['get'];
const handler = { read: require('../handler/read') };

module.exports = ([identifier], database) => {
    var saved_data = handler.read(database), result = null;
    switch (identifier.constructor){
        case Boolean: case Number: 
        case String: result = get(saved_data, identifier, null); break;
        case Array: 
            identifier.forEach((each, index) => identifier[index] = get(saved_data, each, null));
            result = identifier;
        break;
    }
    return result;
}