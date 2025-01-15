import React from "react";
import { StoryRangePicker } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import { RangePickerStoryProps } from "@kac-monorepo/components/src/component/RangePicker/RangePicker";
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
      control: { type: "text" }, // 문자열로 입력받아 dayjs로 변환
      description: "날짜 기본값 (YYYY-MM-DD 형식)",
    },
  },
} as Meta<typeof StoryRangePicker>;

const Template: Story<RangePickerStoryProps> = (args) => (
  <StoryRangePicker {...args} />
);

export const Default = Template.bind({});
