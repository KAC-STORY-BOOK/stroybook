import { Confirm } from "@kac-monorepo/components/src/component/index";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { ConfirmProps } from "@kac-monorepo/components/src/component/Confirm/Confirm";

export default {
  title: "Components/Confirm",
  component: Confirm,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Confirm>;

const Template: Story<typeof Confirm> = (args) => <Confirm {...args} />;

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
