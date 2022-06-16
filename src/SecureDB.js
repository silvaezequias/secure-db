const { filter } = require('./handler/format');
const { defaultName } = require('./config');
const deprecated = require('./deprecated');
const methods = require('./methods');

function isUnefinedOrNull(target){
    return target === undefined || target === null;
}

class DatabaseInterface {
    /**
    * This is the function that creates a new database.
    * @param {string|number|string[]} Names - Name(s) of the database(s).
    * @returns {DatabaseInterface} Returns all data processing functions in the database.
    */
    constructor(Names){
        /**
        * @contant
        * @default
        */
        const name = filter(arguments);
        this.Database = DatabaseInterface;
        /**
         * The `add` method is used to add a number to another or to concatenate a string, it is the junction of the `concat` method and the `sum`.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {any} value - The value that will be part of the processing of the data that is already saved.
         * @returns {any} Returns the final result of the processed data.
         */
        this.add = function Add(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].add(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].add(..., undefined)".`);
            return methods['add']([ identifier, value ], name);
        }

        /**
         * The all method is used to return all data saved in the database in an array.
         * @returns {Array} Returns all data from the database.
         */
        this.all = function All(){ return methods['all'](name) }

        /**
         * This method is used to concatenate one value in front of another value, be it number or string.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {any} value - The value that will be part of the processing of the data that is already saved.
         * @returns {any} Returns the final result of the processed data.
         */
        this.concat = function Concat(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].concat(undefined)".`);
            else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].concat(..., undefined)".`);
            return methods['concat']([ identifier, value ], name);
        }

        /**
         * This method is used to delete any single data.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {null}
         */
        this.delete = function Delete(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].delete(undefined)".`);
            return methods['delete']([identifier], name);
        }

        /**
         * This method is to check if a database exists or not.
         * @param {string|number|string[]} names - Name(s) of the database(s).
         * @returns {Boolean} (true) if the database exists - (false) if the database does not exist.
         */
        this.exists = function Exists(names){
            if (filter(arguments).length === 0) throw new TypeError(`No name specified "[...].exists(undefined)".`);
            return methods['exists']([filter(arguments)], name);
        }

        /**
         * This method is used to return singular data.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {any} Returns the required data value.
         */
        this.get = function Get(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].get(undefined)".`);
            return methods['get']([identifier], name);
        }

        /**
         * This method is to search and return all databases that are within a chosen section.
         * @param {string[]} database - Name(s) of the database(s).
         * @param {Function?} callback - Calls the callback function passing an array with the name of the databases as parameters. If the callback function is not defined, this array with the database names is returned as a variable.
         * @returns {string[]} Returns the name of all databases found within a section.
         */
        this.getDatabases = function GetDatabases(database, callback){
            if (filter(database).length === 0) throw new TypeError(`No name specified "[...].getDatabases(undefined)".`);
            return methods['getDatabases']([filter(database), callback]);
        }

        /**
         * This method is used to check if singular data exists in the database.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @returns {Boolean} (true) if the data exists - (false) if the data does not exist.
         */
        this.has = function Has(identifier){
            if (isUnefinedOrNull(identifier)) throw new TypeError(`No identifier specified "[...].has(undefined)".`);
            return methods['has']([identifier], name);
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
            return methods['push']([ identifier, value ], name);
        }

        /**
         * This method is used to **`permanently delete`** a database. To be able to use it again, you need to instantiate it again.
        * @param {string|number|string[]} database - Name(s) of the database(s).
         */
        this.remove = function Remove(database){
            database = database && database.constructor === Array ? database : arguments;
            return methods['remove'](filter(database))
        };

        /**
         * 
        * @param {string[]} identifier 
         */
        this.reset = function Reset(identifier){
            return methods['reset']([identifier], name);
        }




        /**
         * 
         * @param {string|number} identifier 
        * @param {*} value 
         */
        this.set = function Set(identifier, value){

        }




        /**
         * 
         * @param {string|number} identifier 
        * @param {*} data 
         */
        this.splice = function Splice(identifier, data){

        }

        


        /**
         * 
        * @param {string|number} identifier 
        * @param {string|number} value 
         */
        this.sub = function Sub(identifier, value){

        }





        /**
         * 
         * @param {string|number} identifier 
         * @param {string|number} value 
         */
        this.sum = function Sum(identifier, value){

        }





        /**
         * 
         * @param {string|number} identifier 
         * @param {boolean|[]} value 
         */
        this.toggle = function Toggle(identifier, value){

        }





        /**
         *  
         */
        this.toObject = function ToObject(){

        }
    }
}

Object.assign(DatabaseInterface.prototype, deprecated);
module.exports = new DatabaseInterface(defaultName);