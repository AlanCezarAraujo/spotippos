import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import PropertyFactory from '../../js/modules/property/property.factory';

chai.use(spies);
chai.should();

var $http = {
    get: () => {
        return {
            success: () => {}
        }
    }
};

var factory = new PropertyFactory($http);

describe('The PropertyFactory', () => {
    it('should initialize an empty properties list', () => {
        expect(factory.properties).to.be.a('array');
        expect(factory.properties.length).to.equal(0);
    });

    it('should get properties from the server', () => {
        const get = chai.spy.on($http, 'get');

        factory.listAllProperties();

        expect(get).to.have.been.called;
    });

    it('should add 30 items from a cached list when asked to', () => {
        factory.chachedProperties = new Array(100);
        factory.properties = [];

        expect(factory.properties.length).to.equal(0);

        factory.getMoreProperties();

        expect(factory.properties.length).to.equal(30);
    });
});
