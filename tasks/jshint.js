module.exports = function (grunt) {

    'use strict';

    grunt.config('jshint', {
        all: ['src/**/*.js', '!src/js/app_prod.js'],
        options: {
            jshintrc: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

};
