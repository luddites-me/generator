'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const { kebabCase } = require('lodash');
const yosay = require('yosay');
const cmp = require('semver-compare');

const generatorVersion = require('../../package.json').version;
const releases = require('../../changelog.json').releases;
const sortedVersions = Object.keys(releases).sort(cmp);

const isVersionOld = (version) => version && cmp(version, generatorVersion) < 0;

const getChangelog = (projectVersion) => {
  const initialIndex = sortedVersions.indexOf(projectVersion);
  const sliceStart = initialIndex >= 0 ? initialIndex : 0;
  const releaseList = sortedVersions
    .slice(sliceStart)
    .reverse() // Display the most recent changes first
    .map((version) => `[${version}]\n${(releases[version] || []).join('\n')}\n`)
    .join('\n');

  return `\n~~Changelog~~\n${releaseList}`;
};

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the marvelous ${chalk.red('protect-integration')} generator!`));

    const version = this.config.get('version');
    if (isVersionOld(version)) {
      this.log(getChangelog(version));

      const confirm = await this.prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: `Generator version: ${generatorVersion}, project version: ${version}. Are you sure you want to continue?`,
        },
      ]);

      this.cancel = !confirm.continue;

      if (this.cancel) {
        return;
      }
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
    this.fs.copyTpl(this.templatePath('ci'), this.destinationPath('ci'), this.answers);
  }
};
