import { WebpackConfigTransformer, WebpackConfigMutator } from "@teambit/webpack";
import { cssNoModulesRegex } from "@teambit/modules.style-regexps";
import tailwindcssPlugin from "tailwindcss";
import autoprefixerPlugin from "autoprefixer";

export const previewConfig: WebpackConfigTransformer = (
  config: WebpackConfigMutator
) => {
  // @ts-ignore
  // console.log(config.raw.module.rules);
  const oneOfRule = findOneOfRuleInPreviewConfig(config.raw.module.rules);
  const cssRule = findCssRuleByCssNoModuleRegexp(oneOfRule);
  if (!cssRule) {
    throw new Error(
      "css rule not found. this probably means the webpack config of bit itself has changed"
    );
  }
  // In the preview config we already has a postcss loader
  const postcssLoader = findPostcssLoaderInRule(cssRule.use);
  if (!postcssLoader) {
    throw new Error(
      "postcss loader not found. this probably means the webpack config of bit itself has changed"
    );
  }
  postcssLoader.options.postcssOptions.plugins.push(tailwindcssPlugin);
  const tailwindPostcss = getTailwindPostcss();
  if (cssRule?.use) {
    cssRule.use.push(tailwindPostcss);
  }
  return config;
};
export const devServerConfig: WebpackConfigTransformer = (
  config: WebpackConfigMutator
) => {
  const cssRule = findCssRuleByCssNoModuleRegexp(config?.raw?.module?.rules);
  if (!cssRule) {
    throw new Error('css rule not found. this probably means the webpack config of bit itself has changed')
  }
  const tailwindPostcss = getTailwindPostcss();
  if (cssRule?.use) {
    cssRule.use.push(tailwindPostcss);
  }
  return config;
};

function findCssRuleByCssNoModuleRegexp(rules: Array<any> = []) {
  return rules.find(
    (rule) => rule.test.toString() === cssNoModulesRegex.toString()
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