const { get } = require("lodash");
const handler = {
    read: require("../handler/read"),
    write: require("../handler/write"),
};

module.exports = ([identifier, solidData], database) => {
    const saved_data = handler.read(database);
    var filtered_data = get(saved_data, identifier, {});

    switch (identifier.constructor) {
        case String:
        case Number:
            if (filtered_data.constructor === Array) {
                switch (solidData.constructor) {
                    case String:
                    case Number:
                        if (filtered_data.indexOf(solidData) >= 0)
                            filtered_data.splice(
                                filtered_data.indexOf(solidData),
                                1
                            );
                        break;
                    case Object:
                    case Array:
                        const objectEntries = filtered_data.map((eachObj) =>
                            typeof eachObj === "object"
                                ? Object.entries(eachObj)[0]
                                : eachObj
                        );
                        const dataEntries = Object.entries(solidData)[0];
                        var indexOf = -1;

                        for (
                            let i = 0;
                            i < objectEntries.length && indexOf < 0;
                            i++
                        ) {
                            if (typeof objectEntries[i] === "object") {
                                var [objKey, objValue] = objectEntries[i];
                                var [dataKey, dataValue] = dataEntries;
                                if (objKey == dataKey && objValue == dataValue)
                                    indexOf = i;
                            }
                        }
                        if (indexOf >= 0) filtered_data.splice(indexOf, 1);
                        break;
                }
            }
            break;
    }
    handler.write(saved_data, database);
    return get(saved_data, identifier, solidData);
};
