import {
  BundleDevTool,
  BundleMode,
  BundleTarget,
  getWebpackConfig
} from '@ns8/protect-tools-js';

export default getWebpackConfig({
  bundleTarget: BundleTarget.NODE,
  devtool: BundleDevTool.INLINE_SOURCE_MAP,
  distDirectory: './dist',
  // Globals hack to address https://github.com/node-formidable/formidable/issues/337#issuecomment-183388869
  globals: [{ name: 'GENTLY', value: false }],
  libraryName: 'index',
  mode: BundleMode.DEVELOPMENT,
    sourceDirectory: './src',
});
