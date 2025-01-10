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
  title: "리액트 입문: 기초부터 실전까지",
  content:
    "React로 웹 애플리케이션을 만드는 첫걸음을 시작하세요! 컴포넌트, 상태 관리, 그리고 실전 프로젝트까지 완벽하게 배우는 강의.",
};
