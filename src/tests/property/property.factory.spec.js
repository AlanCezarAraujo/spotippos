import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import PropertyFactory from '../../js/modules/property/property.factory';

chai.use(spies);
chai.should();

var $http;

var factory = new PropertyFactory($http);

describe('The PropertyFactory', () => {
    it('should initialize an empty properties list', () => {
        expect(factory.properties).to.be.a('array');
        expect(factory.properties.length).to.equal(0);
    });
});
