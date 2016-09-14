module.exports = function(grunt) {

    'use strict';

    grunt.config('postcss',     {
        options: {
            map: true,

            processors: [
                require('precss')(),
                require('cssnano')()
            ],

            warnForDuplicates: true
        },
        dist: {
            src: 'src/assets/css/**/*.css',
            dest: 'src/assets/css/style.css'
        }
    });

    grunt.loadNpmTasks("grunt-postcss");
};
