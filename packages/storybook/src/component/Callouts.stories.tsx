import { CalloutsProps } from "@kac-monorepo/components/src/component/Callouts/Callouts";
import { Callouts } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import React from "react";
export default {
  title: "Components/Callouts",
  component: Callouts,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["outline", "normal", "info", "danger", "warning"],
      description: "사용자의 주목을 끌어 중요한 정보를 강조합니다.",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    width: {
      control: "text",
    },
  },
} as Meta;

const Template: Story<CalloutsProps> = (args) => <Callouts {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "타이틀",
  description:
    "시스템 안내 또는 단순 정보를 전달해요. 배너의 설명 문구를 간결하게 적어주세요.",
  type: "info",
};
