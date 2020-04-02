'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const { kebabCase } = require('lodash');
const yosay = require('yosay');

const generatorVersion = require('../../package.json').version;
const releases = require('../../changelog.json').releases;
const Changelog = require('./changelog');
const changelog = new Changelog(generatorVersion, releases);

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the marvelous ${chalk.red('protect-integration')} generator!`));

    this.cancel = false;

    const version = this.config.get('version');
    if (changelog.isVersionOld(version)) {
      this.log(changelog.getChangelog(version));

      const confirm = await this.prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: `The current generator version is ${generatorVersion}, but your project was scaffolded with version ${version}. Do you want to continue?`,
        },
      ]);

      this.cancel = !confirm.continue;
    }

    if (this.cancel) {
      return;
    }

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
    this.config.set({ ...this.answers, version: generatorVersion });

    this.composeWith(require.resolve('../switchboard'), this.answers);
    if (this.answers.includePhp) {
      this.composeWith(require.resolve('../php-module'), this.answers);
    }
  }

  writing() {
    if (this.cancel) {
      return;
    }

    this.config.save();
    this.fs.copyTpl(this.templatePath('./.*'), this.destinationPath('./'), this.answers);
    this.fs.copyTpl(this.templatePath('./*.*'), this.destinationPath('./'), this.answers);
    this.fs.copyTpl(this.templatePath('.circleci'), this.destinationPath('.circleci'), this.answers);
  }
};
