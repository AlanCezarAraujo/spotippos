module.exports = function (grunt) {

    'use strict';

    grunt.config('ngAnnotate', {
        options: {
            singleQuotes: true
        },
        app: {
            files: {
                './src/js/app.min.js': ['./src/js/app.bundle.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
};
