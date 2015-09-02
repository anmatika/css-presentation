module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
       server: {
         options: {
            port: 9000,
            open: true,
            // Change this to '0.0.0.0' to access the server from outside.
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
    watch: {
      styles: {
        files: ['styles/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true,
          livereload: true
          /*livereload: {
            port: 9000
          }*/
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('server', ['connect:server']);
  

};