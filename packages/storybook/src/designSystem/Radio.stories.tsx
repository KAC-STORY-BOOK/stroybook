import { Radio } from "@kac-monorepo/components/src/designSystem";
import { RadioProps } from "@kac-monorepo/components/src/designSystem/Radio";
import { Meta, StoryFn as Story } from "@storybook/react";
import React from "react";
export default {
  title: "designSystem/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "radio 그룹 이름 지정",
    },
    options: {
      control: "object",
      description: "값 설정",
    },
    defaultValue: {
      control: "text",
      description: "기본 값 설정",
    },
    disabled: {
      control: "boolean",
      description: "radio 비활성화",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "라디오 버튼 컴포넌트 입니다.",
      },
    },
  },
} as Meta;
const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "default",
  options: [
    { value: "seoul", label: "서울" },
    { value: "incheon", label: "인천" },
    { value: "busan", label: "부산" },
    { value: "daejeon", label: "대전" },
  ],
  onChange: (value: string) => {
    console.log("select value", value);
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "disabled",
  options: [{ value: "seoul", label: "서울" }],
  defaultValue: "disable",
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  name: "checked",
  options: [{ value: "seoul", label: "서울" }],
  defaultValue: "seoul",
};
