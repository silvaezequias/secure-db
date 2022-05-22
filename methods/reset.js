const handler = {write: require('../handler/write')}
module.exports = ([identifier], database) => {handler.write({}, database.name)}