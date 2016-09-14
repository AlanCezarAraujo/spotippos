'use strict';

import angular from 'angular';
import route from 'angular-route';
import PropertyFactory from '../modules/property/property.factory';
import SearchController from '../modules/search/search.controller';

function configRoute($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/search.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/error404',
            templateUrl: './error/error.html'
        });
}

export default angular
    .module('search', ['ngRoute'])
    .config(['$routeProvider', configRoute])
    .factory('PropertyFactory', PropertyFactory.propertyFactory)
    .controller('SearchController', SearchController);
