import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Login } from "@kac-monorepo/components/src/component/index";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      action: "onSubmit",
      description: "폼 제출 시 호출되는 콜백 함수",
    },
    errorMessage: {
      control: { type: "boolean" },
      description: "form에 문제가 생겼을 시 활성화",
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

export const SuccessLoginAlert = Template.bind({});
SuccessLoginAlert.args = {
  onSubmit: (data: { id: string; pw: string }) => {
    console.log("로그인 요청 데이터:", data);
  },
};

SuccessLoginAlert.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup({ delay: 200 });

  const idInput = await canvas.findByPlaceholderText("아이디를 입력하세요");
  const pwInput = await canvas.findByPlaceholderText("비밀번호를 입력하세요");
  const submitButton = await canvas.findByRole("button", { name: "로그인" }); // 버튼의 텍스트나 역할에 맞게 수정
  await user.type(idInput, "testUser"); // ID 입력
  await user.type(pwInput, "password123"); // 비밀번호 입력
  await user.click(submitButton); // 버튼 클릭
};

export const ErrorLoginAlert = Template.bind({});
ErrorLoginAlert.args = {
  onSubmit: (data: { id: string; pw: string }) => {
    console.log("로그인 요청 데이터:", data);
  },
};

ErrorLoginAlert.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup({ delay: 200 });

  const idInput = await canvas.findByPlaceholderText("아이디를 입력하세요");
  const pwInput = await canvas.findByPlaceholderText("비밀번호를 입력하세요");
  const submitButton = await canvas.findByRole("button", { name: "로그인" }); // 버튼의 텍스트나 역할에 맞게 수정
  await user.clear(idInput); // ID 필드 비우기
  await user.clear(pwInput); // PW 필드 비우기
  await user.click(submitButton); // 버튼 클릭

  args.errorMessage = true;
};
