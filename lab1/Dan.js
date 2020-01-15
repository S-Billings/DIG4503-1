const Person = require("./Person.js");

class Dan extends Person {
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Dan;
