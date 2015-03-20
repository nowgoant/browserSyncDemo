'use strict';

module.exports = function(grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass:dev']
        },
        sass: {
            dev: {
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app',
                    ui: {
                        port: 8080
                    }
                    // snippetOptions: {

                    //     // Ignore all HTML files within the templates folder
                    //     ignorePaths: "templates/*.html",

                    //     // Provide a custom Regex for inserting the snippet.
                    //     rule: {
                    //         match: /<\/body>/i,
                    //         fn: function(snippet, match) {
                    //             return snippet + match;
                    //         }
                    //     }
                    // }
                }
            }
        }
    });

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
