'use strict';
import bootstrap from 'bootstrap'



var element = document.getElementById("body");
element.innerText = "Bonon a au moin ca qui marche";




class Model {
    constructor(properties) {
        this.properties = properties;
    }

    toObject() {
        return this.properties;
    }
}

class View {
   
    constructor(options) {
        this.model = options.model;
        this.template = _.template(options.template);
    }

    render() {
        return this.template(this.model.toObject());
    }
}

var jack = new Model({
    name: 'jack'
});

var view = new View({
    model: jack,
    template: 'Hello, <%= name %>'
});
$("body").append(view.render());
