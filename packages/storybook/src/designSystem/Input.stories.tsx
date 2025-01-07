import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Input } from "@kac-monorepo/components/src/index";

export default {
  title: "designSystem/Input",
  component: Input,
  tags: ["autodocs"], // 자동으로 Docs 탭 활성화
  argTypes: {
    errorMessage: {
      control: "boolean",
      description: "Input에 표시되는 에러",
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
  placeholder: "Enter your username",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Enter your email",
  disabled: true,
};
