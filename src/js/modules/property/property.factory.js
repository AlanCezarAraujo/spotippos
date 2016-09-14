'use strict';

let $http;
let remoteProperties = [];
let propertiesLength = 0;

class PropertyFactory {
    constructor(_$http_) {
        $http = _$http_;

        this.properties = [];
    }

    listAllProperties() {
        $http
            .get('http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=100')
            .success((data) => {
                remoteProperties = data.properties;

                for (let i = 30; i > 0; i--) {
                    this.properties.push(remoteProperties[i]);
                }
            });
    }

    /**
     * Adds 30 properties to this.properties.
     */
    getMoreProperties() {
        for (let index = 30; index > 0; index--) {
            this.properties.push( remoteProperties[propertiesLength++] );
        }
    }

    static propertyFactory($http) {
        return new PropertyFactory($http);
    }
}

PropertyFactory.propertyFactory.$inject = ['$http'];
export default PropertyFactory;
