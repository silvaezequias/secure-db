const get = require('lodash')['get'];
const handler = {read: require('../handler/read')}

module.exports = ([identifier], database) => {
    var saved_data = handler.read(database.name), result = null;
    if (!identifier) throw new TypeError('No identifier specified "[...].get(?)".');
    switch (identifier.constructor){case Number: case String: result = get(saved_data, identifier, null); break;}
    return result;
}