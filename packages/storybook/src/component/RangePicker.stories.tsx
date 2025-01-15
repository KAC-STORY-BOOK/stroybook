import React from "react";
import { StoryRangePicker } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import { RangePickerStoryProps } from "@kac-monorepo/components/src/component/RangePicker/RangePicker";
import moment from "moment";
export default {
  title: "Components/RangePicker",
  component: StoryRangePicker,
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
      control: { type: "object" }, // 문자열로 입력받아 dayjs로 변환
    },
    placeholder: {
      control: { type: "object" },
      description: "RangePicker의 placeholder 설정",
      defaultValue: ["시작일", "종료일"],
    },
  },
} as Meta<typeof StoryRangePicker>;

const Template: Story<RangePickerStoryProps> = (args) => (
  <StoryRangePicker {...args} />
);

export const Default = Template.bind({});

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: ["2023-01-01", "2023-01-31"], // 시작 날짜와 종료 날짜를 설정
};
