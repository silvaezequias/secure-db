const pkg = require('../package.json');
const methods = require('./methods');
const { filter } = require('./handler/format');
const deprecated = require('./deprecated');

function isUnefinedOrNull(target){
    return typeof identifier === 'undefined' && typeof identifier === 'null'
}

class Interface { #name;
    /**
     * 
     * @param {...string|number|string[]} Names 
     */
    constructor(Names){

        this.Database = Interface;
        this.version = pkg['version'];
        this.#name = filter(arguments);

        /**
         * The `add` method is used to add a number to another or to concatenate a string, it is the junction of the `concat` method and the `sum`.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {*} value - The value that will be part of the processing of the data that is already saved.
         * @returns {*} Returns the final result of the processed data.
         */
        this.add = function Add(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError('No identifier specified "[...].add(?)".');
            else if (isUnefinedOrNull(value)) throw new TypeError('No value specified "[...].add(..., ?)".');
            else return methods['add']([ identifier, value ], this.#name);
        }

        /**
         * The all method is used to return all data saved in the database in an array.
         * @returns {Array} Returns all data from the database.
         */
        this.all = function All(){
            return methods['all'](this.#name);
        }

        /**
         * This method is used to concatenate one value in front of another value, be it number or string.
         * @param {string|number} identifier - The identifier responsible for finding the data within the database.
         * @param {*} value - The value that will be part of the processing of the data that is already saved.
         * @returns {*} Returns the final result of the processed data.
         */
        this.concat = function Concat(identifier, value){
            if (isUnefinedOrNull(identifier)) throw new TypeError('No identifier specified "[...].concat(?)".');
            else if (isUnefinedOrNull(value)) throw new TypeError('No value specified "[...].concat(..., ?)".');
            else return methods['concat']([ identifier, value ], this.#name);
        }




        /**
         * 
         * @param {string|number} identifier 
         */
        this.delete = function Delete(identifier){

        }




        /**
         * 
         * @param {string|number|string[]} names 
         */
        this.exists = function Exists(names){

        }




        /**
         * 
         * @param {string|number} identifier 
         */
        this.get = function Get(identifier){
            
        }




        /**
         * 
         * @param {string|number|string[]} database 
         */
        this.getDatabases = function GetDatabases(database){

        }




        /**
         * 
         * @param {string|number} identifier 
         */
        this.has = function Has(identifier){

        }




        /**
         * 
         * @param {string|number} identifier 
         * @param {*} value 
         */
        this.push = function Push(identifier, value){
            
        }




        /**
         * 
         * @param {...string|number|string[]} database 
         */
        this.remove = function Remove(database){

        }




        /**
         * 
         * @param {string|number} identifier 
         */
        this.reset = function Reset(identifier){

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


        
        // Object.keys(methods).forEach(method => {
        //     this[method] = (...args) => methods[method](args, this);
        // });
    }
}

Object.assign(Interface.prototype, deprecated);
module.exports = new Interface();