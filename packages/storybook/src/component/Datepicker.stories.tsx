import React from "react";
import { StoryDatePicker } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import { DatePickerStoryProps } from "@kac-monorepo/components/src/component/DatePicker/DatePicker";

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
    showTime: {
      control: { type: "boolean" },
      description: "시간 설정",
    },
    allowClear: {
      control: { type: "boolean" },
      description: "달력 초기화 버튼",
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof StoryDatePicker>;

const Template: Story<DatePickerStoryProps> = (args) => (
  <StoryDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
