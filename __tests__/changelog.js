const assert = require('yeoman-assert');
const Changelog = require('../generators/app/changelog');

describe('generator-protect-integration:changelog', () => {
  it('returns true for an older version', () => {
    const changelog = new Changelog('0.0.12', {});
    assert.equal(changelog.isVersionOld('0.0.9'), true);
  });

  it('returns false when versions are the same', () => {
    const changelog = new Changelog('0.0.12', {});
    assert.equal(changelog.isVersionOld('0.0.12'), false);
  });

  it('generates a changelog', () => {
    const changelog = new Changelog('0.0.12', {});
    assert.equal(changelog.getChangelog('0.0.11'), `\n~~Changelog~~\n`);
  });
});
