const  { infinityChar } = require('../../config');

function InfinityToChar(data){
    if (data === Infinity) data = infinityChar;
    
    switch(data.constructor){
        case Array: data = ParseDeepArray(data); break;
        case Object: data = ParseDeepObject(data); break;
    }

    function ParseDeepArray(target){
        target.forEach((item, index) => {
            if (!item) return item;

            item = item === Infinity ? infinityChar : item;
            switch(item.constructor){
                case Array: item = ParseDeepArray(item); break;
                case Object: item = ParseDeepObject(item); break;
                case Number: item = item > 1e+20 ? infinityChar : item; break;
            }
            target[index] = item;
        });
        return target;
    }
    function ParseDeepObject(target){
        var entries = Object.entries(target);
        entries.forEach(([key, item]) => {
            if (!item) return {[key]: item}; 

            item = item === Infinity ? infinityChar : item;
            switch(item.constructor){
                case Array: item = ParseDeepArray(item); break;
                case Object: item = ParseDeepObject(item); break;
                case Number: item = item > 1e+20 ? infinityChar : item; break;
            }
            target[key] = item;
        })
        return target;
    }
    return data;
}


module.exports = { InfinityToChar };