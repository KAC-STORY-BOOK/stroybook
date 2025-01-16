import { Modal } from "@kac-monorepo/components/src/component/index";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { ModalProps } from "@kac-monorepo/components/src/component/Modal/Modal";
export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description:
        "Title은 어떤 정보를 담고 있는지 요약된 내용으로 제공합니다. Title을 필수적으로 작성하기를 권장합니다.",
    },
    description: {
      control: "text",
      description:
        "유저가 Action을 실행하기 위해 알아야 하는 추가 정보나 컨텍스트를 전달합니다.",
    },
    primaryAction: {
      control: "object",
      description: "주요 action이 한가지만 있을 경우",
    },
    alternativeAction: {
      control: "object",
      description: "두 개의 Action이 있을 경우",
    },
    nonpreferred: {
      control: "boolean",
      description: "라벨의 이름이 길어질 경우",
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "타이틀 입니다.",
  description: "사용자에게 보여줄 컨텍스트를 입력해 주세요.",
  primaryAction: {
    label: "확인",
    onClick: () => alert("확인"),
  },
};

export const PrimaryAction = Template.bind({});
PrimaryAction.args = {
  title: "위치 정보 사용 설정",
  description:
    "내 위치 확인을 위해 [권한] 설정에서 위치 정보를 사용을 허용해주세요.",
};

export const AlternativeAction = Template.bind({});
AlternativeAction.args = {
  title: "예약 중 게시글",
  description:
    "예약 중인 게시글에는 채팅할 수 없어요. 취소되면 알림으로 알려드릴까요?",
  primaryAction: {
    label: "알람받기",
    onClick: () => {
      alert("알람 설정 완료");
    },
  },
  alternativeAction: {
    label: "취소",
    onClick: () => {
      alert("취소");
    },
  },
};

export const Nonpreferred = Template.bind({});
Nonpreferred.args = {
  title: "작성 중인 글이 있어요.",
  description: "'이젠 안쓰게 되어 나눔해요'글을 이어서 쓰시겠어요?",
  primaryAction: {
    label: "이어서 쓰기",
    onClick: () => {},
  },
  alternativeAction: {
    label: "새로쓰기",
    onClick: () => {},
  },
  nonpreferred: true,
};
