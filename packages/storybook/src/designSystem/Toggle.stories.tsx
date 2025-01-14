import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Toggle } from "@kac-monorepo/components/src/designSystem";
import { ToggleProps } from "@kac-monorepo/components/src/designSystem/Toggle";

export default {
  title: "designSystem/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "토글 옆에 표시되는 라벨 텍스트",
    },
    defaultChecked: {
      control: "boolean",
      description: "초기 상태 (on/off)",
    },
    onChange: {
      action: "changed",
      description: "상태 변경 시 호출되는 핸들러",
    },
    disabled: {
      control: "boolean",
      description: "토글을 비활성화합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Toggle 컴포넌트는 On/Off 상태를 변경할 수 있는 스위치입니다.",
      },
    },
  },
} as Meta<typeof Toggle>;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Defalut = Template.bind({});
Defalut.args = {
  label: "알림 활성화",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "비활성화된 토글",
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "기본값 On",
  defaultChecked: true,
};
