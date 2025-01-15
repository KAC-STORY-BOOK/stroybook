import React from "react";
import { StoryDatePicker } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import { DatePickerStoryProps } from "@kac-monorepo/components/src/component/DatePicker/DatePicker";
import moment from "moment";

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
    defaultValue: {
      control: { type: "text" }, // 문자열로 입력받아 dayjs로 변환
      description: "날짜 기본값",
    },
    placeholder: {
      control: { type: "text" },
      description: "날짜를 입력하세요.",
    },
  },
} as Meta<typeof StoryDatePicker>;

const Template: Story<DatePickerStoryProps> = (args) => (
  <StoryDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: "2023-01-01",
};

export const TimeDatePicker = Template.bind({});
TimeDatePicker.args = {
  showTime: true,
};

export const DatePickerDisabled = Template.bind({});
DatePickerDisabled.args = {
  disabled: true,
};
