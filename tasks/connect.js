module.exports = function (grunt) {

    'use strict';

    function middleware(connect, options, middlewares) {
        middlewares.unshift(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', '*');
            next();
        });

        return middlewares;
    }

    grunt.config('connect', {
        server: {
            options: {
                port: 5100,
                base: 'src',
                middleware: middleware
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
