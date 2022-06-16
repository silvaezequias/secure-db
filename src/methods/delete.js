const unset = require('lodash')['unset'];
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}
module.exports = ([identifier], database) => {
    var saved_data = handler.read(database);
    if (!identifier) throw new TypeError('No identifier specified "[...].delete(?)".');
    switch (identifier.constructor){case Number: case String: unset(saved_data, identifier); break;}
    handler.write(saved_data, database); return null;
}