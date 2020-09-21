import {
  BundleDevTool,
  BundleMode,
  BundleTarget,
  getWebpackConfig
} from '@luddites-me/ts-tools';

export default getWebpackConfig({
  bundleTarget: BundleTarget.NODE,
  devtool: BundleDevTool.EVAL,
  distDirectory: './dist',
  // Globals hack to address https://github.com/node-formidable/formidable/issues/337#issuecomment-183388869
  globals: [{ name: 'GENTLY', value: false }],
  libraryName: 'index',
  mode: BundleMode.DEVELOPMENT,
    sourceDirectory: './src',
});
