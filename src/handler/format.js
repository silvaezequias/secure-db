const { default_name } = require('../settings.json');

function json(string){
    try {return JSON.parse(string)}
    catch(err){return {}};
}
function stringfy(object){
    try {return JSON.stringify(object, null, 4)}
    catch(err){return '{}'}
}
function names(_names){
    for (let i = 0; i < _names.length; i++){
        if (_names.length == 1 && _names[0].constructor == Boolean) { i = 1; return [];};
        var replaceWhiteSpace = /(.) +(.)/g;
        var removeWhiteSpace = / /g;
        var invalidChars = /[^a-z0-9\-_]/gi;
        var replaced = new String(_names[i]).replace(invalidChars, '')
        .replace(replaceWhiteSpace, '$1-$2').replace(removeWhiteSpace, '');

        if (replaced == '') _names.splice(i, 1);
        else _names[i] = replaced;
    }
    return _names.length == 0 ? [default_name] : _names;
}
function filter(target){
    target = target && [String, Number].includes(target.constructor) ? [target] : target;
    var args =  Array.from(target);
    args.forEach((each, index) => { if(each && each.constructor === Array){args = args.concat(each); args.splice(index, 1)}});
    var filtered = args.filter(each => ['number', 'string', 'boolean'].includes(typeof each))
    filtered.length == 0 ? filtered.push(default_name) : null;
    return filtered;
}
module.exports = { json, names, stringfy, filter };