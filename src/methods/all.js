const handler = {read: require('../handler/read')}

module.exports = (database) => {
    var saved_data = handler.read(database);
    return Object.entries(saved_data)
}