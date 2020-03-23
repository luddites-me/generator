const semverCmp = require('semver-compare');

module.exports = class Changelog {
  constructor(generatorVersion, releases) {
    this.generatorVersion = generatorVersion;
    this.releases = releases;
    this.sortedVersions = Object.keys(releases).sort(semverCmp);
  }

  isVersionOld(version) {
    return version && semverCmp(version, this.generatorVersion) < 0;
  }

  getChangelog(version) {
    const initialIndex = this.sortedVersions.indexOf(version);
    const sliceStart = initialIndex >= 0 ? initialIndex : 0;
    const releaseList = this.sortedVersions
      .slice(sliceStart)
      .reverse() // Display the most recent changes first
      .map((v) => `[${v}]\n${(this.releases[v] || []).join('\n')}\n`)
      .join('\n');

    return `\n~~Changelog~~\n${releaseList}`;
  }
};
