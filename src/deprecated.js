const docs = require("../package.json").homepage;
module.exports = {
    Child: class DeprecatedFunction {
        constructor(){
            throw new Error(
            'The "Child" function is deprecated. Please check the documentation. ' +
                docs
            );
        }
    },
    getChilds: function DeprecatedFunction() {
        throw new Error(
        'The "getChild" function is deprecated. Please check the documentation. ' +
            docs
        );
    },
    setBigInt: function DeprecatedFunction() {
        throw new Error(
        'The "setBigInt" function is deprecated. Please check the documentation. ' +
            docs
        );
    },
};
