const get = require('lodash')['get'];
const handler = {read: require('../handler/read')}

module.exports = ([identifier], database) => {
    var saved_data = handler.read(database.name);
    return Object.entries(saved_data).map(([ID, data]) => ({ID, data}));
}