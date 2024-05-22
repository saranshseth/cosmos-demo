/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */

const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-designs',
    '@storybook/addon-postcss',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/vue3-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    inlineStories: true,
    source: 'code',
  },
  webpackFinal: async (config) => {
    return config;
  },
};

export default config;
