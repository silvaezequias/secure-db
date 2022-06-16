const { get, set } = require("lodash");
const handler = {
    read: require("../handler/read"),
    write: require("../handler/write"),
};

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database);
    var filtered_data = saved_data;

    switch (identifier.constructor) {
        case String:
        case Number:
            switch (solidData.constructor) {
                case Boolean:
                    filtered_data = get(saved_data, identifier, null);
                    if (typeof filtered_data === "boolean")
                        set(
                            saved_data,
                            identifier,
                            filtered_data ? false : true
                        );
                    else set(saved_data, identifier, solidData);
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
                    set(saved_data, identifier, solidData[++indexOf]);
                    break;
            }
            break;
    }
    handler.write(saved_data, database);
    return get(saved_data, identifier, solidData);
};
