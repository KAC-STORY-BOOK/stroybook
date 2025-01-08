import { Typography } from "@kac-monorepo/components/src/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "designSystem/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      description: "사용할 HTML 태그 또는 스타일 변형",
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "warning",
        "default",
      ],
      description: "폰트 색상 설정",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "폰트 정렬",
    },
    bold: {
      control: { type: "boolean" },
      description: "폰트 굵기",
    },
    italic: {
      control: { type: "boolean" },
      description: "폰트 기울기",
    },
    children: {
      control: { type: "text" },
      description: "텍스트 입력",
    },
  },
} as Meta<typeof Typography>;

const Template: Story<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "p",
  color: "default",
  align: "left",
  bold: false,
  italic: false,
  children: "다람쥐 헌 쳇바퀴에 타고파",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  color: "primary",
  align: "left",
  bold: true,
  italic: false,
  children: "다람쥐 헌 쳇바퀴에 타고파",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
  color: "default",
  align: "left",
  bold: true,
  italic: false,
  children: "다람쥐 헌 쳇바퀴에 타고파",
};

export const Success = Template.bind({});
Success.args = {
  variant: "p",
  color: "success",
  align: "left",
  bold: true,
  italic: false,
  children: "다람쥐 헌 쳇바퀴에 올라타",
};

export const Error = Template.bind({});
Error.args = {
  variant: "p",
  color: "error",
  align: "left",
  bold: true,
  italic: false,
  children: "다람쥐 헌 쳇바퀴에 넘어져",
};
