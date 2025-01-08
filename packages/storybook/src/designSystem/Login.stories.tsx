import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Login } from "@kac-monorepo/components/src/index";

export default {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Login>;

const Template: Story<typeof Login> = (args) => <Login {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  onSubmit: (data: { id: string; pw: string }) => {
    console.log("로그인 요청 데이터:", data);
  },
};
