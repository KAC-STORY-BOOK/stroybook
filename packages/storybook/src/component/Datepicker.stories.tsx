import React from "react";
import { StoryDatePicker } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "Components/DatePicker",
  component: StoryDatePicker,
  tags: ["autodocs"],
  argTypes: {
    picker: {
      control: { type: "select" },
      description: "week, month, year",
    },
    format: {
      control: { type: "text" },
      description: "format 설정 ",
    },
    size: {
      control: { type: "select" },
    },
  },
} as Meta<typeof StoryDatePicker>;

const Template: Story<typeof StoryDatePicker> = (args) => (
  <StoryDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
