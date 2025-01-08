import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Login } from "@kac-monorepo/components/src/component/index";

export default {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      action: "onSubmit",
      description: "폼 제출 시 호출되는 콜백 함수",
    },
  },
} as Meta<typeof Login>;

const Template: Story<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data: { id: string; pw: string }) => {
    console.log("로그인 요청 데이터:", data);
  },
};

export const ErrorLogin = Template.bind({});
ErrorLogin.args = {
  errorMessage: true,
};
