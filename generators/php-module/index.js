'use strict';
const Generator = require('yeoman-generator');

const MODULE_DIR = './module';

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('platformName', { type: String, required: true });
  }

  _updateEditorConfig() {
    const edConfPath = this.destinationPath('.editorconfig');
    const currentEdConfig = this.fs.read(edConfPath);
    if (currentEdConfig.match(/\[\*\.php\]/) !== null) {
      return;
    }

    const phpEdConf = this.fs.read(this.templatePath('.editorconfig'));
    this.fs.write(edConfPath, `${currentEdConfig}\n${phpEdConf}`);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./composer.json'),
      this.destinationPath(MODULE_DIR, './composer.json'),
      this.options,
    );
    this._updateEditorConfig();
  }

  install() {
    this.yarnInstall();
  }
};
