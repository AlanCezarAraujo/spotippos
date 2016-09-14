module.exports = function (grunt) {

    'use strict';

    grunt.config('watch', {
        options: {
          livereload: true
        },
        js: {
            files: ['src/**/*.js', 'src/**/**/*.js', '!src/main.js'],
            tasks: ['browserify'],
            options: {
                spawn: false,
                atBegin: true
            }
        },
        html: {
            files: ['*.html', '**/*.html'],
            tasks: ['copy']
        },
        css: {
            files: ['src/assets/css/**/*.css'],
            tasks: ['postcss']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
