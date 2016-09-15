'use strict';

let $http;
let propertiesLength = 0;
let propertyFactoryScope;

class PropertyFactory {
    constructor(_$http_) {
        $http = _$http_;

        propertyFactoryScope = this;

        this.properties = [];
        this.cachedProperties = [];
    }

    listAllProperties() {
        const successCallback = this._setProperties;

        $http
            .get('http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=100')
            .success(propertyFactoryScope._setProperties);
    }

    _setProperties(data) {
        propertyFactoryScope.cachedProperties = data.properties;

        propertyFactoryScope.getMoreProperties();
    }

    /**
     * Adds 30 properties to this.properties.
     */
    getMoreProperties() {
        for (let index = 30; index > 0; index--) {
            this.properties.push( this.cachedProperties[propertiesLength++] );
        }
    }

    static propertyFactory($http) {
        return new PropertyFactory($http);
    }
}

PropertyFactory.propertyFactory.$inject = ['$http'];
export default PropertyFactory;
