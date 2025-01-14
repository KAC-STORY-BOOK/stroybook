import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Button } from "@kac-monorepo/components/src/designSystem";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import { ButtonProps } from "@kac-monorepo/components/src/designSystem/Button";

export default {
  title: "designSystem/Button", // 폴더 경로
  component: Button, // 컴포넌트
  tags: ["autodocs"], // 자동으로 Docs 탭 활성화
  argTypes: {
    // 컴포넌트의 인자
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description: "버튼의 스타일을 지정합니다.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼의 크기를 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "버튼 컴포넌트는 다양한 스타일, 크기, 클릭 이벤트를 지원합니다.", // 컴포넌트 설명
      },
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// 기본 스토리
export const Default = Template.bind({});
Default.args = {
  variant: "primary", // 버튼 스타일
  size: "medium", // 버튼 크기
  children: "Default Button", // 버튼 텍스트
  disabled: false, // 버튼 활성화 여부
  onClick: action("Default button clicked"), // 클릭 이벤트
};

// 커스텀 스토리
export const Color = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <Button
      variant="primary"
      size="medium"
      onClick={action("Primary button clicked")}
    >
      Primary
    </Button>
    <Button
      variant="secondary"
      size="medium"
      onClick={action("Secondary button clicked")}
    >
      Secondary
    </Button>
    <Button
      variant="danger"
      size="medium"
      onClick={action("Danger button clicked")}
    >
      Danger
    </Button>
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "secondary",
  size: "medium",
  children: "Disabled Button",
  disabled: true,
  onClick: action("Disabled button clicked"),
};

export const ClickEvent = Template.bind({});
ClickEvent.args = {
  variant: "primary",
  size: "large",
  children: "Click Button",
  onClick: fn(),
};
