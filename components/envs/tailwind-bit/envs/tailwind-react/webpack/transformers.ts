import { WebpackConfigTransformer, WebpackConfigMutator } from "@teambit/webpack";
import * as stylesRegexps from "@teambit/webpack.modules.style-regexps";
import tailwindcssPlugin from "tailwindcss";

import autoprefixerPlugin from "autoprefixer";

function addTailwindConfig(config: WebpackConfigMutator): WebpackConfigMutator {
  // @ts-ignore
  // console.log(config.raw.module.rules);
  const oneOfRule = findOneOfRuleInPreviewConfig(config.raw.module.rules);
  const cssRule = findCssRuleByCssNoModuleRegexp(oneOfRule);
  if (!cssRule) {
    throw new Error(
      "css rule not found. this probably means the webpack config of bit itself has changed"
    );
  }
  // we already has a postcss loader
  const postcssLoader = findPostcssLoaderInRule(cssRule.use);
  if (!postcssLoader) {
    throw new Error(
      "postcss loader not found. this probably means the webpack config of bit itself has changed"
    );
  }
  postcssLoader.options.postcssOptions.plugins.unshift(tailwindcssPlugin);
  // const tailwindPostcss = getTailwindPostcss();
  // if (cssRule?.use) {
  //   cssRule.use.push(tailwindPostcss);
  // }
  return config;
}

export const previewConfig: WebpackConfigTransformer = (
  config: WebpackConfigMutator
) => {
  return addTailwindConfig(config);
};
export const devServerConfig: WebpackConfigTransformer = (
  config: WebpackConfigMutator
) => {
  console.log(config.raw.module.rules[1].oneOf[0].use[2].options.postcssOptions.plugins)
  const newConfig = addTailwindConfig(config);
  console.log(newConfig.raw.module.rules[1].oneOf[0].use[2].options.postcssOptions.plugins[0].toString())
  // console.log(require("util").inspect(newConfig.raw, { depth : 12}));
  // throw new Error('gilad')
  return newConfig;
};

function findCssRuleByCssNoModuleRegexp(rules: Array<any> = []) {
  return rules.find(
    (rule) => rule.test.toString() === stylesRegexps.cssNoModulesRegex.toString()
  );
}

function findOneOfRuleInPreviewConfig(rules: Array<any> = []) {
  const rule = rules.find((rule) => !!rule.oneOf);
  return rule.oneOf;
}

function findPostcssLoaderInRule(loaders: Array<any>) {
  return loaders.find(loader => loader.loader.includes('postcss'));
}

function getTailwindPostcss() {
  return {
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        plugins: [
          tailwindcssPlugin,
          autoprefixerPlugin
        ]
      }
    }
  }
}