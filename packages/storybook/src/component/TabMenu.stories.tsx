import { TabMenu } from "@kac-monorepo/components/src/component/index";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { TabProps } from "@kac-monorepo/components/src/component/TabMenu/TabMenu";

export default {
  title: "Components/TabMenu",
  component: TabMenu,
  tags: ["autodocs"],
  argTypes: {
    defaultActiveTab: {
      control: { type: "number" },
      description: "active 기본 값 설정",
    },
    tabs: {
      control: { type: "object" },
      description: "tab item 입력",
    },
  },
} as Meta<typeof TabMenu>;

const Template: Story<{ tabs: TabProps[]; defaultActiveTab?: number }> = (
  args,
) => <TabMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabs: [
    { label: "Tab 1", content: "첫번째 탭 입니다." },
    { label: "Tab 2", content: "두번째 탭 입니다." },
    { label: "Tab 3", content: "세번째 탭 입니다." },
  ],

  defaultActiveTab: 0,
};
