const get = require('lodash')['get'];
const handler = { read: require('../handler/read') };

module.exports = ([identifier], DatabaseSettings) => {
    var saved_data = handler.read(DatabaseSettings), result = null;
    switch (identifier.constructor){
        case Boolean: case Number: 
        case String: result = get(saved_data, identifier, null); break;
        case Array: result = identifier.map(each => get(saved_data, each, null)); break;
    }
    return result;
}