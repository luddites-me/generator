'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const { kebabCase } = require('lodash');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the marvelous ${chalk.red('protect-integration')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'platformName',
        message: "What is the name of the platform you're integrating with Protect?",
        default: this.config.get('platformName') || this.determineAppname(),
        filter: kebabCase,
      },
      {
        type: 'confirm',
        name: 'includePhp',
        message: 'Do you want to create a PHP module for this integration?',
        default: this.config.get('includePhp'),
      },
    ];

    this.answers = await this.prompt(prompts);
    this.config.set(this.answers);

    this.composeWith(require.resolve('../switchboard'), this.answers);
    if (this.answers.includePhp) {
      this.composeWith(require.resolve('../php-module'), this.answers);
    }
  }

  writing() {
    this.config.save();
    this.fs.copyTpl(this.templatePath('./.*'), this.destinationPath('./'), this.answers);
    this.fs.copyTpl(this.templatePath('./*.*'), this.destinationPath('./'), this.answers);
    this.fs.copyTpl(this.templatePath('ci'), this.destinationPath('ci'), this.answers);
  }
};
