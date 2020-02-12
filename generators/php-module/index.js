'use strict';
const Generator = require('yeoman-generator');

const MODULE_DIR = './module';

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('platformName', { type: String, required: true });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('./*.*'), this.destinationPath(MODULE_DIR), this.options);
  }

  install() {
    this.yarnInstall();
  }
};
