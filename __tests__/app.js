'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-protect-integration:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['src/index.ts']);
  });
});
