const { get, set } = require('lodash');
const handler = {
    read: require('../handler/read'),
    write: require('../handler/write')
}

module.exports = ([identifier, solidData], DatabaseSettings) => {
    const saved_data = handler.read(DatabaseSettings);
    var filtered_data = saved_data;

    switch (identifier.constructor){
        case String: case Number: 
            filtered_data = get(saved_data, identifier, null);
            if (filtered_data !== null) {
                switch (filtered_data.constructor){
                    case String: 
                        var pos = {
                            [String]: () => filtered_data += solidData,
                            [Array]: () => { solidData.unshift(filtered_data); filtered_data = solidData },
                            [Object]: () => filtered_data = { [filtered_data]: solidData },
                            [Boolean]: () => filtered_data += `${solidData}`,
                            [Number]: () => filtered_data = isNaN(filtered_data) ? `${filtered_data}${solidData}` : Number(filtered_data) + solidData
                        }
                        pos[solidData.constructor] ? pos[solidData.constructor]() : null; 
                    break;
                    case Array:
                        var pos = {
                            [String]: () => filtered_data.push(solidData),
                            [Array]: () => filtered_data = filtered_data.concat(solidData),
                            [Object]: () => filtered_data.push(solidData),
                            [Boolean]: () => filtered_data.push(solidData),
                            [Number]: () => filtered_data.push(solidData)
                        }
                        pos[solidData.constructor] ? pos[solidData.constructor]() : null; 
                    break;
                    case Object:
                        var pos = {
                            [String]: () => filtered_data[solidData] = solidData,
                            [Array]: () => Object.assign(filtered_data, solidData),
                            [Object]: () => Object.assign(filtered_data, solidData),
                            [Boolean]: () => filtered_data[solidData] = solidData,
                            [Number]: () => filtered_data[solidData] = solidData
                        }
                        pos[solidData.constructor] ? pos[solidData.constructor]() : null; 
                    break;
                    case Number:
                        var pos = {
                            [String]: () => filtered_data = isNaN(solidData) ? `${filtered_data}${solidData}` : filtered_data + Number(solidData),
                            [Array]: () => { solidData.unshift(filtered_data); filtered_data = solidData },
                            [Object]: () => filtered_data = { [filtered_data]: solidData },
                            [Boolean]: () => filtered_data = `${filtered_data}${solidData}`,
                            [Number]: () => filtered_data = Number(filtered_data) + solidData
                        }
                        pos[solidData.constructor] ? pos[solidData.constructor]() : null; 
                    break;
                    case Boolean:
                        var pos = {
                            [String]: () => filtered_data = `${filtered_data}${solidData}`,
                            [Array]: () => { solidData.unshift(filtered_data); filtered_data = solidData },
                            [Object]: () => filtered_data = { [filtered_data]: solidData },
                            [Boolean]: () => filtered_data = `${filtered_data}${solidData}`,
                            [Number]: () => filtered_data = `${filtered_data}${solidData}`
                        }
                        pos[solidData.constructor] ? pos[solidData.constructor]() : null; 
                    break;
                };
                set(saved_data, identifier, filtered_data);
            } else {
                switch (solidData.constructor){
                    case String: case Number: 
                    case Object: case Array: 
                    case Boolean: set(saved_data, identifier, solidData); break;
                }
            }
        break;
    }

    handler.write(saved_data, DatabaseSettings);
    return get(saved_data, identifier, undefined);
}