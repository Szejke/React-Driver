module.exports = {
  stories: [
    '../src/components/.stories.js',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
  ],
};
