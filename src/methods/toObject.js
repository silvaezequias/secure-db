const get = require('lodash')['get'];
const handler = {read: require('../handler/read')}

module.exports = (database) => {
    return handler.read(database);;
}