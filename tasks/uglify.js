module.exports = function (grunt) {

    'use strict';

    grunt.config('uglify', {
        js: {
            src: ['./src/js/app.min.js'],
            dest: './src/js/app.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
