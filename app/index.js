'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var EasyReactGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the doozie EasyReact generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.dest.mkdir('app');
      this.dest.mkdir('app/javascripts');

      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
      this.src.copy('_index.html', 'index.html');
      this.src.copy('_app.js', 'javascripts/app.js');
      this.src.copy('_title.html', 'javascripts/templates/title.html');
      this.src.copy('_title.js', 'javascripts/components/title.js');


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