const format = require('./handler/format');
const methods = require('./methods');

function isUnefinedOrNull(target) { return target === undefined || target === null };

class Database {
  /**
  * This is the function that creates a new database.
  * @param {string|string[]} DatabaseNames - Name(s) of the database(s).
  * @returns Returns all database management functions
  */
  constructor(DatabaseNames) {
    const names = format.names(Array.from(arguments));
    var settings = {
      parents: names.slice(0, -1),
      name: names.slice(-1)
    };
    var cryptography = false;
    /**
     * The `add` method is used to add a number to another or to concatenate a string, it is the junction of the `concat` method and the `sum`.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {any} value - The value that will be part of the processing of the data that is already saved.
     * @returns {any} Returns the final result of the processed data.
     */
    this.add = function Add(data_path, value) {
      if (isUnefinedOrNull(data_path)) throw new TypeError('No identifier specified "[...].add(undefined)".');
      else if (isUnefinedOrNull(value)) throw new TypeError('No value specified "[...].add(..., undefined)".');
      return methods['add'](data_path, value, settings, cryptography);
    };

    /**
     * The all method is used to return all data saved in the database in an array.
     * @returns {Array} Returns all data from the database.
     */
    this.all = function All(options){
      return methods['all'](options, settings, cryptography);
    };

    /**
     * This method is used to concatenate one value in front of another value, be it number or string.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {any} value - The value that will be part of the processing of the data that is already saved.
     * @returns {any} Returns the final result of the processed data.
     */
    this.concat = function Concat(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].concat(undefined)".`);
      else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].concat(..., undefined)".`);
      return methods['concat'](data_path, value, settings, cryptography);
    };
    /**
     * This method is used to delete any single data.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @returns {null}
     */
    this.Database = Database;
    this.delete = function Delete(data_path){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].delete(undefined)".`);
      return methods['delete'](data_path, settings, cryptography);
    };
    /**
     * This method is to check if a database exists or not.
     * @param {string|number|string[]} names - Name(s) of the database(s).
     * @returns {Boolean} (true) if the database exists - (false) if the database does not exist.
     */
    this.exists = function Exists(names){
      let path_names = format.names(Array.from(arguments));
      if (path_names.length <= 0) throw new TypeError(`No name specified "[...].exists(undefined)".`);
      return methods['exists'](path_names);
    };
    /**
     * This method is used to return singular data.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @returns {any} Returns the required data value.
     */
    this.get = function Get(data_path){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].get(undefined)".`);
      return methods['get'](data_path, settings, cryptography);
    };
    /**
     * This method is to search and return all databases that are within a chosen section.
     * @param {string[]} databases - Name(s) of the database(s).
     * @param {Function?} callback - Calls the callback function passing an array with the name of the databases as parameters. If the callback function is not defined, this array with the database names is returned as a variable.
     * @returns {string[]} Returns the name of all databases found within a section.
     */
    this.getDatabases = function GetDatabases(databases, callback){
      var path_names = format.names([databases]);
      if (path_names.length <= 0) throw new TypeError(`No name specified "[...].getDatabases(undefined)".`);
      return methods['getDatabases'](path_names, callback);
    };
    /**
     * This method is used to check if singular data exists in the database.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @returns {Boolean} (true) if the data exists - (false) if the data does not exist.
     */
    this.has = function Has(data_path){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].has(undefined)".`);
      return methods['has'](data_path, settings, cryptography);
    };
    /**
     * This method is for pushing an item into an array that is saved.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {any} value - The value that will be part of the processing of the data that is already saved.
     * @returns {any} Returns the final result of the processed data.
     */
    this.push = function Push(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].push(undefined)".`);
      else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].push(..., undefined)".`);
      return methods['push'](data_path, value, settings, cryptography);
    };
    /**
     * This method is used to **`permanently delete`** a database. To be able to use it again, you need to instantiate it again.
     * @param {string|number|string[]} database - Name(s) of the database(s).
     */
    this.remove = function Remove(database){
      var path_names = format.names(Array.from(arguments));
      path_names = path_names.length ? path_names : names;
      return methods['remove'](path_names);
    };
    /**
     * This method is used to reset the database. It is possible to maintain data by adding them to the method parameters.
     * @param {string[]} to_keep - The identifier responsible for finding the data within the database.
     * @return {any} Returns the final result of the processed data.
     */
    this.reset = function Reset(to_keep){
      to_keep = Array.from(arguments);
      return methods['reset'](to_keep, settings, cryptography);
    };

    /**
     * This method is used to manage the encryption key, mode and output of the database.
     * @param {string|Boolean|{}} crypto - Settings responsible for configuring database encryption.
     */
    this.security = function Security(crypto){
      if (isUnefinedOrNull(crypto)) throw new TypeError('No security settings specified "[...].security(undefined)".');
      return cryptography = crypto;
    };

    this.Section = class Section extends Database {
      /**
      * This is the function that creates a new sub-database.
      * @param {string|string[]} SectionNames - Name(s) of the sub-database(s).
      * @returns Returns all database management functions
      */
      constructor(SectionNames) {
        super(names.concat(Array.from(arguments)));
        this.security(cryptography);
      };
    };
    /**
     * This method is to set a data in the database.
     * @param {any} data_path - The identifier responsible for finding the data within the database.
     * @param {any} value - The value that will be part of the processing of the data that is already saved.
     * @return {any} Returns the final result of the processed data.
     */
    this.set = function Set(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].set(undefined)".`);
      return methods['set'](data_path, value, settings, cryptography);
    };
    /**
     * This method is used to remove an element from an array.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {any} data - Data that will be removed from the array.
     * @return {any} Returns the final result of the processed data.
     */
    this.splice = function Splice(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].splice(undefined)".`);
      else if (isUnefinedOrNull(value)) throw new TypeError(`No data specified "[...].splice(..., undefined)".`);
      return methods['splice'](data_path, value, settings, cryptography);
    };
    /**
     * This method is used to subtract a value from a number.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {string|number} value - The value that will be part of the processing of the data that is already saved.
     * @return {any} Returns the final result of the processed data.
     */
    this.sub = function Sub(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].sub(undefined)".`);
      else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].sub(..., undefined)".`);
      return methods['sub'](data_path, value, settings, cryptography);
    };
    /**
     * This method is used to add a value to a number.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {string|number} value - The value that will be part of the processing of the data that is already saved.
     * @return {any} Returns the final result of the processed data.
     */
     this.sum = function Sum(data_path, value){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].sum(undefined)".`);
      else if (isUnefinedOrNull(value)) throw new TypeError(`No value specified "[...].sum(..., undefined)".`);
      return methods['sum'](data_path, value, settings, cryptography);
    };
    /**
     * The `toggle` method is used to toggle values in the database.
     * @param {string|number} data_path - The identifier responsible for finding the data within the database.
     * @param {boolean|any[]} [value = true] - Value that will be alternated with later ones. Boolean case, toggles between True and False.
     * @return {any} Returns the value that was toggled.
     */
    this.toggle = function Toggle(data_path, value = true){
      if (isUnefinedOrNull(data_path)) throw new TypeError(`No identifier specified "[...].toggle(undefined)".`);
      return methods['toggle'](data_path, value, settings, cryptography);
    };
    /**
     * The all method is used to return all data saved in the database in object.
     * @returns {{}} Returns all data from the database.
     */
    this.toObject = function ToObject(){
       return methods['toObject'](settings, cryptography);
    };
    this.version = require('./package.json')?.version
  };
};

module.exports = new Database('main');