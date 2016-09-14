'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.loadTasks('./tasks');

    grunt.registerTask('codeStyle', ['jscs', 'jshint']);
    grunt.registerTask('default', ['connect', 'browserify', 'postcss', 'watch']);
};
