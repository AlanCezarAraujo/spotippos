module.exports = function(grunt) {

    'use strict';

    grunt.config('jscs',     {
        src: "src/**/*.js",
        options: {
            config: ".jscsrc",
            excludeFiles: ["src/js/app_prod.js"]
        }
    });

    grunt.loadNpmTasks("grunt-jscs");
};
