const get = require('lodash')['get'];
const handler = {read: require('../handler/read')}

module.exports = (DatabaseSettings) => handler.read(DatabaseSettings);