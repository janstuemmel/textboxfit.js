module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'src/textboxfit.js',
                dest: 'dist/textboxfit.min.js'
            }
        },

        copy: {
            main: {
                src: 'src/textboxfit.js',
                dest: 'dist/textboxfit.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['uglify', 'copy']);
};