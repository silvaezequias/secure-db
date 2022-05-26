const { get, set } = require("lodash");
const handler = {
    read: require("../handler/read"),
    write: require("../handler/write"),
};

module.exports = ([identifier, solidData = true], database) => {
    const saved_data = handler.read(database.name);
    var filtered_data = saved_data;

    if (!identifier)
        throw new TypeError('No identifier specified "[...].toggle(?)".');

    switch (identifier.constructor) {
        case String:
        case Number:
            switch (solidData.constructor) {
                case Boolean:
                    filtered_data = get(saved_data, identifier, null);
                    if (typeof filtered_data === "boolean")
                        filtered_data = set(
                            saved_data,
                            identifier,
                            filtered_data ? false : true
                        );
                    else filtered_data = set(saved_data, identifier, solidData);
                    break;
                case Array:
                    filtered_data = get(saved_data, identifier, null);
                    var indexOf = -1;
                    solidData = solidData.filter((each) =>
                        ["string", "number", "object", "boolean"].includes(
                            typeof each
                        )
                    );
                    for (let i = 0; i < solidData.length; i++) {
                        JSON.stringify(solidData[i]) ===
                        JSON.stringify(filtered_data)
                            ? (indexOf = i)
                            : null;
                    }
                    indexOf = indexOf < solidData.length - 1 ? indexOf : -1;
                    filtered_data = set(
                        saved_data,
                        identifier,
                        solidData[++indexOf]
                    );
                    break;
            }
            break;
    }
    handler.write(filtered_data, database.name);
    return get(saved_data, identifier, solidData);
};
