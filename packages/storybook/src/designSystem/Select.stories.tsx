import React from "react";
import { Select } from "@kac-monorepo/components/src/designSystem";
import { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "designSystem/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "값 설정",
    },

    disabled: {
      control: "boolean",
      description: "select 비활성화",
    },
  },
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
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [{ value: "option1", label: "Option 1" }],
  disabled: true,
};
