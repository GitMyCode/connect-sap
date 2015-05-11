'use strict'

class Model {
    constructor(properties) {
        this.properties = properties;
    }

    toObject() {
        return this.properties;
    }
}