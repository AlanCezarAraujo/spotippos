module.exports = function(grunt) {

    'use strict';

    grunt.config('jscs',     {
        src: 'src/**/*.js',
        options: {
            config: '.jscsrc',
            excludeFiles: ['src/js/app.bundle.js', 'src/js/app.min.js']
        }
    });

    grunt.loadNpmTasks('grunt-jscs');
};
