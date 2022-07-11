const has = require('lodash')['has'];
const handler = {read: require('../handler/read')}

module.exports = ([identifier], DatabaseSettings) => {
    var saved_data = handler.read(DatabaseSettings), result = null;
    switch (identifier.constructor){
        case Boolean: case Number: 
        case String: result = has(saved_data, identifier); break;
        case Array: result = identifier.map(each => has(saved_data, each)); break;
    }
    return result;
}