import { Alert } from "@kac-monorepo/components/src/component/index";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { AlertProps } from "@kac-monorepo/components/src/component/Alert/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      content: {
        control: { type: "text" },
        description: "alert 문구 입력",
      },
      buttonText: {
        control: { type: "text" },
        description: "버튼 텍스트 입력",
      },
      onClose: {
        action: "onConfirm",
        description: "버튼 클릭 시 호출되는 콜백 함수",
      },
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "alert창 입니다.",
  buttonText: "확인",
};
