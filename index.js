'use strict';
module.exports = require('./lib/securedb');

/**
 * The currently installed version of this package.
 * @type {database_version}
 * @constant
 * @default
 */
module.exports['version'] = require('./package.json')['version'];
