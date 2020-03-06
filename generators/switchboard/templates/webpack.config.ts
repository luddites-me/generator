import { BundleMode, BundleTarget, getWebpackConfig } from '@ns8/protect-tools-bundle';

export default getWebpackConfig({
  bundleTarget: BundleTarget.NODE,
  distDirectory: './dist',
  sourceDirectory: './switchboard',
  libraryName: 'switchboard',
  mode: BundleMode.DEVELOPMENT,
});
