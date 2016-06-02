module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        dest: {
          'js': 'build/js/bower.js',
          'css': 'build/css/bower.css'
        },
        mainFiles: {
          handlebars: ['handlebars.min.js', 'handlebars.runtime.min.js'],
          bootstrap: ['dist/js/bootstrap.min.js', 'dist/css/bootstrap.min.css'],
          'font-awesome': 'css/font-awesome.min.css',
          'smooth-scroll': 'dist/js/smooth-scroll.min.js'
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/hbs.js', 'src/js/jquery.nicescroll.js', 'src/js/zerif-nicescroll.js', 'src/js/zerif.js' ],
        dest: 'build/js/custom.js',
      },
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'Freshblends.Templates',
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          }
        },
        files: {
          'src/js/hbs.js': 'src/templates/*.hbs'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images' },
          { expand: true, flatten: true, src: ['src/fonts/*', 'bower_components/font-awesome/fonts/*', 'bower_components/bootstrap/dist/fonts/*'], dest: 'build/fonts'},
          { expand: true, flatten: true, src: ['src/index.html', 'src/concept_note.pdf'], dest: 'build'},
          { expand: true, flatten: true, src: ['src/js/html5.js', 'src/js/content.js'], dest: 'build/js'},
          { expand: true, flatten: true, src: ['src/css/*'], dest: 'build/css'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['handlebars', 'bower_concat', 'concat', 'copy']);

};