function json(string){
    try {return JSON.parse(string)}
    catch(err){return {}};
}
function stringfy(object){
    try {return JSON.stringify(object, null, 4)}
    catch(err){return '{}'}
}
module.exports = { json, stringfy };