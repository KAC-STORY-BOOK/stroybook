import { Radio } from "@kac-monorepo/components/src/index";
import { Meta, StoryFn as Story } from "@storybook/react";
import React from "react";
export default {
  title: "designSystem/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "라디오 버튼 컴포넌트 입니다.",
      },
    },
  },
} as Meta<typeof Radio>;
const Template: Story<typeof Radio> = (args) => <Radio {...args} />;
export const Default = Template.bind({});
Default.args = {
  name: "test",
  options: [
    { value: "seoul", label: "서울" },
    { value: "incheon", label: "인천" },
    { value: "busan", label: "부산" },
    { value: "daejeon", label: "대전" },
  ],
  defaultValue: "seoul",
  onChange: (value: string) => {
    console.log("select value", value);
  },
};
