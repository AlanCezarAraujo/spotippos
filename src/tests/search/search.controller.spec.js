'use strict';

import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import SearchController from '../../js/modules/search/search.controller';

chai.use(spies);
chai.should();

const PropertyFactory = {
    listAllProperties: function() {},
    getMoreProperties: function() {},
    properties: function() {}
};


const listAllProperties = chai.spy.on(PropertyFactory, 'listAllProperties');


var controller = new SearchController(PropertyFactory);

describe('The SearchController', () => {
    it('should list the properties on initialization', () => {
        listAllProperties.should.have.been.called;
    });

    it('should filter the properties by id', () => {
        controller.filter = {
            id: 1
        };

        expect(controller.filterProperties({ id: '1' })).to.equal(true);
        expect(controller.filterProperties({ id: '2' })).to.equal(false);
    });

    it('should filter the properties by squareMeters', () => {
        controller.filter = {
            squareMeters: 110
        };

        expect(controller.filterProperties({ squareMeters: '110' })).to.equal(true);
        expect(controller.filterProperties({ squareMeters: '80' })).to.equal(false);
    });

    it('should filter the properties by beds', () => {
        controller.filter = {
            beds: 3
        };

        expect(controller.filterProperties({ beds: '3' })).to.equal(true);
        expect(controller.filterProperties({ beds: '1' })).to.equal(false);
    });

    it('should filter the properties by baths', () => {
        controller.filter = {
            baths: 1
        };

        expect(controller.filterProperties({ baths: '1' })).to.equal(true);
        expect(controller.filterProperties({ baths: '2' })).to.equal(false);
    });

    it('should filter the properties by price', () => {
        controller.filter = {
            minValue: '1',
            maxValue: '3'
        };

        expect(controller.filterProperties({ price: '1' })).to.equal(true);
        expect(controller.filterProperties({ price: '2' })).to.equal(true);
        expect(controller.filterProperties({ price: '4' })).to.equal(false);

        controller.filter = {
            minValue: '5',
            maxValue: '8'
        };

        expect(controller.filterProperties({ price: '5' })).to.equal(true);
        expect(controller.filterProperties({ price: '8' })).to.equal(true);
        expect(controller.filterProperties({ price: '4' })).to.equal(false);
    });
});
