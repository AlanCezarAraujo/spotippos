'use strict';

let PropertyFactory;
let mainScope;

class SearchController {
    constructor(__PropertyFactory){
        PropertyFactory = __PropertyFactory;

        PropertyFactory.listAllProperties();

        mainScope = this;

        this.filter = {};
        this.properties = PropertyFactory.properties;
    }

    getMoreItems() {
        PropertyFactory.getMoreProperties();
    }

    filterProperties(property) {
        if (mainScope.filter.id && +property.id !== mainScope.filter.id) {
            return false;
        }

        if (mainScope.filter.squareMeters && +property.squareMeters !== mainScope.filter.squareMeters) {
            return false;
        }

        if (mainScope.filter.beds && +property.beds !== mainScope.filter.beds) {
            return false;
        }

        if (mainScope.filter.baths && +property.baths !== mainScope.filter.baths) {
            return false;
        }

        if (mainScope.filter.minValue && +property.price < mainScope.filter.minValue) {
            return false;
        }

        if (mainScope.filter.maxValue && +property.price > mainScope.filter.maxValue) {
            return false;
        }

        return true;
    }
}

SearchController.$inject = ['PropertyFactory'];
export default SearchController;
