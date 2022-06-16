function json(string){
    try {return JSON.parse(string)}
    catch(err){return {}};
}
function stringfy(object){
    try {return JSON.stringify(object, null, 4)}
    catch(err){return '{}'}
}
function names(names){
    for (let i = 0; i < names.length; i++){
        if (names.length == 1 && names[0].constructor == Boolean) { i = 1; return [];};
        var replaceWhiteSpace = /(.) +(.)/g;
        var removeWhiteSpace = / /g;
        var invalidChars = /[\*\.\"\/\\\[\]\:\;\|\,\?\!\<\>\'\`\´]/gim;
        var replaced = new String(names[i]).replace(invalidChars, '')
        .replace(replaceWhiteSpace, '$1-$2').replace(removeWhiteSpace, '');

        if (replaced == '') names.splice(i, 1);
        else names[i] = replaced;
    }
    return names.length == 0 ? ['main'] : names;
}
function filter(target){
    target = target && [String, Number].includes(target.constructor) ? [target] : target;
    var args =  Array.from(target);
    args.forEach((each, index) => { if(each && each.constructor === Array){args = args.concat(each); args.splice(index, 1)}});
    var filtered = args.filter(each => ['number', 'string', 'boolean'].includes(typeof each))
    filtered.length == 0 ? filtered.push('main') : null;
    return filtered;
}
module.exports = { json, names, stringfy, filter };