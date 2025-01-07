import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Input } from "@kac-monorepo/components/src/index";

export default {
  title: "designSystem/Input",
  component: Input,
  tags: ["autodocs"], // 자동으로 Docs 탭 활성화
  argTypes: {
    label: {
      control: "text",
      description: "Input 필드 상단에 표시되는 라벨 텍스트",
    },
    errorMessage: {
      control: "text",
      description: "Input 하단에 표시되는 에러 메시지",
    },
    placeholder: {
      control: "text",
      description: "Input에 표시되는 힌트 텍스트",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "Input의 타입을 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "Input을 비활성화합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Input 컴포넌트는 텍스트 입력을 위한 필드를 제공합니다. 라벨, 에러 메시지 등을 표시할 수 있습니다.",
      },
    },
  },
} as Meta<typeof Input>;

const Template: Story<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  placeholder: "Enter your username",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Password",
  placeholder: "Enter your password",
  errorMessage: "Password must be at least 8 characters",
  type: "password",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Email",
  placeholder: "Enter your email",
  disabled: true,
};
