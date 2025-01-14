import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { Checkbox } from "@kac-monorepo/components/src/designSystem";
import { CheckboxProps } from "@kac-monorepo/components/src/designSystem/CheckBox";

export default {
  title: "designSystem/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "체크박스 옆에 표시되는 라벨 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "체크박스를 비활성화합니다.",
    },
    checked: {
      control: "boolean",
      description: "체크박스가 체크되었는지 여부를 설정합니다.",
    },
    onChange: {
      action: "changed",
      description: "체크박스 상태가 변경될 때 호출되는 핸들러입니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Checkbox 컴포넌트는 선택 가능한 체크박스를 제공합니다. 라벨과 비활성화 상태를 지원합니다.",
      },
    },
  },
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Defalut = Template.bind({});
Defalut.args = {
  label: "동의합니다",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "비활성화된 체크박스",
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "이미 체크된 체크박스",
  checked: true,
};
