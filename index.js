const events = require('events');
const pkg = require('./package.json');
const methods = require('./methods');
const deprecated = require('./deprecated');

class database extends events {
    constructor(...identifier){ super();
        this.Database = database;
        this.version = pkg['version'];

        var filtered = identifier.filter(each => ['number', 'string'].includes(typeof each))
        filtered.length == 0 ? filtered.push('main') : null;
        this.name = ParseNames(filtered);

        Object.keys(methods).forEach(method => {
            this[method] = (...args) => methods[method](args, this);
        });
        Object.assign(this, deprecated);
    }
}

function ParseNames(names){
    for (let i = 0; i < names.length; i++){
        var invalidChars = /[\*\.\"\/\\\[\]\:\;\|\,\?\!\<\>\'\`\´]/gim
        var replaced = names[i].replace(invalidChars, '');
        if (replaced == '') names.splice(i, 1);
        else names[i] = replaced;
    }
    return names.length == 0 ? ['main'] : names;
}
module.exports = new database();