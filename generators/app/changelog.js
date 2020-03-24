const semverCmp = require('semver-compare');

/**
 * Simple utility class to generate a changelog between current generator version and supplied version.
 */
module.exports = class Changelog {
  /**
   * Creates a changelog.
   * @param {string} generatorVersion - Current version of the generator
   * @param {{[string]: string[]}} releases - Object with the version as the key and an array of strings as value
   */
  constructor(generatorVersion, releases) {
    this.generatorVersion = generatorVersion;
    this.releases = releases;
    this.sortedVersions = Object.keys(releases).sort(semverCmp);
  }

  /**
   * Returns true if the version is older than the generator version, false otherwise.
   * @param {string} version - Version to compare against generator version
   * @return {boolean} Whether the version is old.
   */
  isVersionOld(version) {
    return version && semverCmp(version, this.generatorVersion) < 0;
  }

  /**
   * Gets a stringified changelog for display.
   * @param {string} version - Version to generate changelog up to
   * @return {string} Stringified changelog.
   */
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
