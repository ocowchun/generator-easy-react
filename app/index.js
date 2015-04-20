'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var EasyReactGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },
  writing: {
    app: function() {
      this.dest.mkdir('app');
      this.dest.mkdir('app/javascripts');
      this.dest.mkdir('app/stylesheets');

      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_index.html', 'app/index.html');
      this.src.copy('_app.js', 'app/javascripts/app.js');
      this.src.copy('_app.css', 'app/stylesheets/app.css');

      this.src.copy('_title.html', 'app/javascripts/templates/title.html');
      this.src.copy('_title.js', 'app/javascripts/components/title.js');

    },

    projectfiles: function() {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function() {
    this.installDependencies();
  }
});

module.exports = EasyReactGenerator;
