module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    hostname: 'localhost',
                    keepalive: true,
                    debug: true
                }
            }
        },
        less: {
            development: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: 'styles/*.less',
                    dest: '',
                    ext: '.css'
                }]
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: '*.jade',
                    dest: '',
                    ext: '.html'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jade: {
                files: ['*.jade'],
                tasks: ['jade']
            },
            styles: {
                files: ['styles/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            html: {
                files: ['**/*.html'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('server', ['connect:server']);
};