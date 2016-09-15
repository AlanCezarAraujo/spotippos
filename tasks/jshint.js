module.exports = function (grunt) {

    'use strict';

    grunt.config('jshint', {
        all: ['src/**/*.js', '!src/js/app.bundle.js', '!src/js/app.min.js'],
        options: {
            jshintrc: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

};
