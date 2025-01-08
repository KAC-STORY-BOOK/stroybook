import { Typography } from "@kac-monorepo/components/src/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "designSystem/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Typography>;

const Template: Story<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "p",
  color: "default",
  align: "left",
  bold: false,
  italic: false,
  children: "샘플 텍스트 입니다.",
};
