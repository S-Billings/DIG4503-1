const Person = require("./Person.js");

class Dan extends Person {
    constructor(name, colors, bgColors) {
        super(name, colors, bgColors);
    }
}

module.exports = Dan;
