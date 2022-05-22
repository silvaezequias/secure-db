const has = require('lodash')['has'];
const handler = {read: require('../handler/read')}

module.exports = ([identifier], database) => {
    var saved_data = handler.read(database.name);
    if (!identifier) throw new TypeError('No identifier specified "[...].has(?)".');
    return has(saved_data, identifier);
}