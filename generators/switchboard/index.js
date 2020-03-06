'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('platformName', { type: String, required: true });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('build'), this.destinationPath('build'), this.options);
    this.fs.copyTpl(this.templatePath('switchboard'), this.destinationPath('switchboard'), this.options);
    this.fs.copyTpl(this.templatePath('./.*'), this.destinationPath('./'), this.options);
    this.fs.copyTpl(this.templatePath('./*.*'), this.destinationPath('./'), this.options);
  }

  install() {
    this.yarnInstall();
  }
};
