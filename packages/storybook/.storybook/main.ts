import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react-webpack5",
  addons: [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook-dark-mode",
    "@storybook/addon-interactions",
  ],
  babel: {
    presets: ["@babel/preset-react", "@babel/preset-typescript"],
  },
  docs: {
    autodocs: "tag", // 자동으로 Docs 생성
  },
};

export default config;
