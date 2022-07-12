const { filter: nameFilter } = require('./handler/format');
const default_settings = require('./settings.json');
const methods = require('./methods');

function isUnefinedOrNull(target){ return target === undefined || target === null };

class DatabaseInterface {
    /**
    * This is the function that creates a new database.
    * @param {string|number|string[]} Names - Name(s) of the database(s).
    * @returns {DatabaseInterface} Returns all data processing functions in the database.
     */
    constructor(Names){
        this.Database = DatabaseInterface;
        const DatabaseSettings = {
            cryptography: false,
            name: nameFilter(arguments) 
        };
        /**
         * The `add` method is used to add a number to another or to concatenate a string, it is the junction of the `concat` method and the `sum`.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {any} value - The value that will be part of the processing of the data that is already saved.
         * @returns {any} Returns the final result of the processed data.
         */
        this.add = function Add(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].add(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].add(..., undefined)".`);
            return methods['add']([ identifier, value ], DatabaseSettings);
        }

        /**
         * The all method is used to return all data saved in the database in an array.
         * @returns {Array} Returns all data from the database.
         */
        this.all = function All(){ return methods['all'](DatabaseSettings) }

        /**
         * This method is used to concatenate one value in front of another value, be it number or string.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {any} value - The value that will be part of the processing of the data that is already saved.
         * @returns {any} Returns the final result of the processed data.
         */
        this.concat = function Concat(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].concat(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].concat(..., undefined)".`);
            return methods['concat']([ identifier, value ], DatabaseSettings);
        }
        
        /**
         * This method is used to delete any single data.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {null}
         */
        this.delete = function Delete(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].delete(undefined)".`);
            return methods['delete']([identifier], DatabaseSettings);
        }

        /**
         * This method is to check if a database exists or not.
         * @param {string|number|string[]} names - Name(s) of the database(s).
         * @returns {Boolean} (true) if the database exists - (false) if the database does not exist.
         */
        this.exists = function Exists(names){
            if (nameFilter(arguments).length === 0) throw new TypeError(`No name specified "[...].exists(undefined)".`);
            return methods['exists']([nameFilter(arguments)], DatabaseSettings);
        }

        /**
         * This method is used to return singular data.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {any} Returns the required data value.
         */
        this.get = function Get(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].get(undefined)".`);
            return methods['get']([identifier], DatabaseSettings);
        }

        /**
         * This method is to search and return all databases that are within a chosen section.
         * @param {string[]} database - Name(s) of the database(s).
         * @param {Function?} callback - Calls the callback function passing an array with the name of the databases as parameters. If the callback function is not defined, this array with the database names is returned as a variable.
         * @returns {string[]} Returns the name of all databases found within a section.
         */
        this.getDatabases = function GetDatabases(database, callback){
            if (isUnefinedOrNull(database) || nameFilter(database).length === 0) throw new TypeError(`No name specified "[...].getDatabases(undefined)".`);
            return methods['getDatabases']([nameFilter(database), callback]);
        }

        /**
         * This method is used to check if singular data exists in the database.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {Boolean} (true) if the data exists - (false) if the data does not exist.
         */
        this.has = function Has(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].has(undefined)".`);
            return methods['has']([identifier], DatabaseSettings);
        }

        /**
         * This method is for pushing an item into an array that is saved.
        * @param {string|number} identifier - The identifier responsible for finding the data within the database.
        * @param {any} value - The value that will be part of the processing of the data that is already saved.
        * @returns {any} Returns the final result of the processed data.
        */
        this.push = function Push(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].push(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].push(..., undefined)".`);
            return methods['push']([ identifier, value ], DatabaseSettings);
        }

        /**
         * This method is used to **`permanently delete`** a database. To be able to use it again, you need to instantiate it again.
        * @param {string|number|string[]} database - Name(s) of the database(s).
         */
        this.remove = function Remove(database){
            database = database ? database.constructor === Array ? database : arguments : DatabaseSettings.name;
            return methods['remove'](nameFilter(database))
        }

        /**
         * This method is used to reset the database. It is possible to maintain data by adding them to the method parameters.
         * @param {string[]} identifier - The identifier responsible for finding the data within the database.
         * @return {any} Returns the final result of the processed data.
         */
        this.reset = function Reset(identifier = {}){
            identifier = identifier && identifier.constructor === Array ? identifier : Array.from(arguments);
            return methods['reset']([identifier], DatabaseSettings);
        }
        
        /**
         * This method is used to manage the encryption key, mode and output of the database.
         * @param {string|Boolean|{}} settings - Settings responsible for configuring database encryption.
         */
        this.security = function Security(settings){
            if (isUnefinedOrNull(settings)) throw new TypeError(`No settings specified "[...].security(undefined)".`);
            switch(settings.constructor){
                case String: DatabaseSettings['cryptography'] = { key: settings }; break;
                case Boolean: case Object: DatabaseSettings['cryptography'] = settings; break;
            }
        }

        /**
         * This method is to set a data in the database.
         * @param {any} identifier - The identifier responsible for finding the data within the database.
         * @param {any} value - The value that will be part of the processing of the data that is already saved.
         * @return {any} Returns the final result of the processed data.
         */
        this.set = function Set(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].set(undefined)".`);
            return methods['set']([ identifier, value ], DatabaseSettings);
        };

        /**
         * This method is used to remove an element from an array.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {any} data - Data that will be removed from the array.
         * @return {any} Returns the final result of the processed data.
         */
        this.splice = function Splice(identifier, data){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].splice(undefined)".`);
            else if (isUnefinedOrNull(data)) throw new TypeError(`No data specified "[...].splice(..., undefined)".`);
            return methods['splice']([identifier, data], DatabaseSettings);
        }

        /**
         * This method is used to subtract a value from a number.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {string|number} value - The value that will be part of the processing of the data that is already saved.
         * @return {any} Returns the final result of the processed data.
         */
        this.sub = function Sub(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].sub(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].sub(..., undefined)".`);
            return methods['sub']([identifier, value], DatabaseSettings);
        }

        /**
         * This method is used to subtract a value from a number.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {string|number} value - The value that will be part of the processing of the data that is already saved.
         * @return {any} Returns the final result of the processed data.
         */
        this.sum = function Sum(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].sum(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].sum(..., undefined)".`);
            return methods['sum']([identifier, value], DatabaseSettings);
        }

        /**
         * The `toggle` method is used to toggle values in the database.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {boolean|any[]} [value=true] - Value that will be alternated with later ones. Boolean case, toggles between True and False.
         * @return {any} Returns the value that was toggled.
         */
        this.toggle = function Toggle(identifier, value = true){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].toggle(undefined)".`);
            return methods['toggle']([identifier, value], DatabaseSettings);
        }

        /**
         * The all method is used to return all data saved in the database in object.
         * @returns {{}} Returns all data from the database.
         */
        this.toObject = function ToObject(){ return methods['toObject'](DatabaseSettings) }
    }
}

module.exports = new DatabaseInterface(default_settings['default_name']);