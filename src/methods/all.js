const handler = {read: require('../handler/read')}

module.exports = (DatabaseSettings) => {
    var saved_data = handler.read(DatabaseSettings);
    return Object.entries(saved_data)
}