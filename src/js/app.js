'use strict';

import angular from 'angular';

import search from './routes/search.route';
import infiniteScroll from './modules/infinite-scroll/infinite-scroll.directive';

angular
    .module('spotippos', [
        'search'
    ])
    .directive('infiniteScroll', infiniteScroll);

angular.element(document)
    .ready(() => angular.bootstrap(document, ['spotippos']), { strictDi: true });
