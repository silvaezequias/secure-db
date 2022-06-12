const get = require('lodash')['get'];
const handler = {read: require('../handler/read')}

module.exports = ([identifier], database) => {
    var saved_data = handler.read(database.name);
    return saved_data;
}