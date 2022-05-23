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
        this.name = filtered;

        Object.keys(methods).forEach(method => {
            this[method] = (...args) => methods[method](args, this);
        });
        Object.assign(this, deprecated);
    }
}
module.exports = new database();