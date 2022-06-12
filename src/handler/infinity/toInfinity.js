const  { infinityChar } = require('../../config');

function CharToInfinity(data){
    if (data === infinityChar) data = Infinity;
    
    switch(data.constructor){
        case Array: data = ParseDeepArray(data); break;
        case Object: data = ParseDeepObject(data); break;
    }

    function ParseDeepArray(target){
        target.forEach((item, index) => {
            if (!item) return item;

            item = item === infinityChar ? Infinity : item;
            switch(item.constructor){
                case Array: item = ParseDeepArray(item); break;
                case Object: item = ParseDeepObject(item); break;
                case Number: item = item === infinityChar ? Infinity : item;
            }
            target[index] = item;
        });
        return target;
    }
    function ParseDeepObject(target){
        var entries = Object.entries(target);
        entries.forEach(([key, item]) => {
            if (!item) return {[key]: item}; 

            item = item === infinityChar ? Infinity : item;
            switch(item.constructor){
                case Array: item = ParseDeepArray(item); break;
                case Object: item = ParseDeepObject(item); break;
                case Number: item = item === infinityChar ? Infinity : item;
            }
            target[key] = item;
        })
        return target;
    }
    return data;
}
module.exports = { CharToInfinity };