const { set, get, indexOf, findIndex } = require("lodash");
const handler = {
    read: require("../handler/read"),
    write: require("../handler/write"),
};

module.exports = ([identifier, solidData], DatabaseSettings) => {
    var saved_data = handler.read(DatabaseSettings);
    var filtered_data = get(saved_data, identifier, {});

    switch (identifier.constructor) {
        case String: case Number:
            if (filtered_data.constructor === Array) {
                switch (solidData.constructor) {
                    case String: case Number: case Boolean: filtered_data.splice(indexOf(filtered_data, solidData), 1); break;
                    case Object: case Array: filtered_data.splice(findIndex(filtered_data, solidData), 1); break;
                }
                set(saved_data, identifier, filtered_data);
            }
        break;
    }
    handler.write(saved_data, DatabaseSettings);
    return get(saved_data, identifier, solidData);
};
