import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Button } from "@kac-monorepo/components/src/index";

export default {
  title: "designSystem/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: "버튼 컴포넌트입니다.",
      },
    },
  },
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "medium",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "medium",
  children: "Secondary Button",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  size: "large",
  children: "Danger Button",
};
