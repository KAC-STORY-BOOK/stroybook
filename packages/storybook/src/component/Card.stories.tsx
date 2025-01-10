import { Card } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argsType: {
    title: {
      control: { type: "text" },
      description: "제목 입력",
    },
    content: {
      control: { type: "text" },
      description: "컨텐츠 입력",
    },
  },
} as Meta<typeof Card>;

const Template: Story<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "제목을 입력하세요",
  content: "내용을 입력하세요",
};
