module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configuration for Uglify task
        uglify: {
            dist: {
                files: {
                    'public/dist/main.min.js': ['public/src/main.js']
                }
            }
        },
        
        // Configuration for CSS Minification task
        cssmin: {
            dist: {
                files: {
                    'public/dist/style.min.css': ['public/src/style.css']
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
