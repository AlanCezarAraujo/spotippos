module.exports = function (grunt) {

    'use strict';

    grunt.config('browsersync', {
        dev: {
            bsFiles: {
                src : [
                    'src/css/*.css',
                    'src/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './app'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
};
