module.exports = function (grunt) {

    'use strict';

    grunt.config('browserify', {
        dist: {
            files: {
                'src/js/app.bundle.js': ['src/js/app.js'],
            },
            options: {
                transform: ['babelify'],
                browserifyOptions: {
                    debug: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};
