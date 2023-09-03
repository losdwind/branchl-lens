// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const extraNodeModules = require("node-libs-browser");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});
config.resolver.sourceExts.push('mjs');
config.resolver.sourceExts.push('web.tsx');
config.resolver.sourceExts.push('native.tsx');
config.resolver.sourceExts.push('web.ts');
config.resolver.sourceExts.push('native.ts');

config.resolver.extraNodeModules = extraNodeModules;
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});
module.exports = config;
