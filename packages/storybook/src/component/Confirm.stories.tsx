import { Confirm } from "@kac-monorepo/components/src/component/index";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { ConfirmProps } from "@kac-monorepo/components/src/component/Confirm/Confirm";

export default {
  title: "Components/Confirm",
  component: Confirm,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "모달창 제목 입력",
    },
    message: {
      control: { type: "text" },
      description: "모달창 내용 입력",
    },
    confirmText: {
      control: { type: "text" },
      description: "버튼 텍스트 입력",
    },
    cancelText: {
      control: { type: "text" },
      description: "버튼 텍스트 입력",
    },
    onConfirm: {
      action: "onConfirm",
      description: "확인할 시 호출되는 콜백 함수",
    },
  },
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onConfirm: () => {
    alert("확인");
  },
  onCancel: () => {
    alert("취소");
  },
  title: "Confirm 모달창 테스트",
  message: "등록하시겠습니까?",
  confirmText: "등록",
  cancelText: "취소",
};
