module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      public: 'public'
    },

    sass: {
      dev: {
        files: {
          'public/css/style.css': 'public/css/style.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['public/css/*.scss'],
        tasks: ['sass']
      },
      files: ['public/**'],
      tasks: ''
    },

    express: {
      all: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: [
            './public'
          ],
          livereload: true
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: '<%=app.public%>/lib',
          verbose: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('bower-to-public', [
    'bower:install'
  ]);
  grunt.registerTask('start-server', [
    'express',
    'watch'
  ]);
};