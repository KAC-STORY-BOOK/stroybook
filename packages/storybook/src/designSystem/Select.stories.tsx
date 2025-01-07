import React from "react";
import { Select } from "@kac-monorepo/components/src/index";
import { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "designSystem/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "셀렉트 컴포넌트 입니다.",
      },
    },
  },
} as Meta<typeof Select>;

const Template: Story<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select an option",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};
