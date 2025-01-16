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
  type: "normal",
};

export const Info = Template.bind({});

Info.args = {
  title: "안내",
  description: "최신 버전으로 업데이트하고 더 편해진 약속을 확인해보세요.",
  type: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "알림",
  description: "상품권을 거래하기 전에 상품권 거래 유의사항을 확인해주세요.",
  type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  title: "주의",
  description:
    "최근 3개월 내 3회 이상 경찰에 사기 신고된 전화번호입니다. 피해 위험이 있으니, 주의하세요!",
  type: "danger",
};

export const Outline = Template.bind({});
Outline.args = {
  title: "설문조사",
  description: "개선을 위해 여러분의 목소리를 들려주세요.",
  type: "outline",
};
