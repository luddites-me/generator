/* eslint-disable no-console, import/extensions, import/no-unresolved */
import { inc, ReleaseType } from 'semver';
import { writeFileSync } from 'fs';
import rootPackage from '../package.json';
import { env } from './loadEnv';

/**
 * Increments all of the project's version numbers according to semver patch rules.
 * If `DEV_SUFFIX` defined on the env and if the `PATCH_MODE` is "dev", we can incrementally patch by suffix
 * e.g. `2.0.1` would increment to `2.0.2-abc.0`
 * `2.0.2-abc.0` would increment to `2.0.2-abc.1`
 */
const incrementVersion = (): void => {
  const devSuffix: string = process.env.DEV_SUFFIX ? process.env.DEV_SUFFIX.trim().toLowerCase() : 'none';
  const patchMode: string = process.env.PATCH_MODE ? process.env.PATCH_MODE.trim().toLowerCase() : 'patch';
  const releaseType: ReleaseType = devSuffix !== 'none' && patchMode === 'dev' ? 'prerelease' : 'patch';
  const currentVersion: string = rootPackage.version;
  const nextPackageVersion: string | null = inc(currentVersion, releaseType, false, devSuffix);
  if (!nextPackageVersion) throw new Error('Could not increment package version');

  rootPackage.version = nextPackageVersion;
  writeFileSync('package.json', JSON.stringify(rootPackage, null, 2));
  console.log(`Updated ${rootPackage.name}@${currentVersion} to ${nextPackageVersion}`);
};

try {
  incrementVersion();
} catch (error) {
  console.error(error);
  console.info(env);
}
