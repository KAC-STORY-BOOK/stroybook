import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-webpack5",
  addons: [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-essentials",
  ],
  babel: {
    presets: ["@babel/preset-react", "@babel/preset-typescript"],
  },
};

export default config;
