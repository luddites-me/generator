import { BundleMode, BundleTarget, getWebpackConfig } from '@ns8/protect-tools-bundle';

export default getWebpackConfig({
  bundleTarget: BundleTarget.NODE,
  distDirectory: './dist',
  sourceDirectory: './src',
  libraryName: 'index',
  mode: BundleMode.DEVELOPMENT,
});
