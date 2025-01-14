import { Image } from "@kac-monorepo/components/src/designSystem";
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "designSystem/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "이미지 경로",
    },
    alt: {
      control: { type: "text" },
      description: "이미지 설명",
    },
    width: {
      control: { type: "text" },
      description: "px",
    },
    height: {
      control: { type: "text" },
      description: "px",
    },
    borderRadius: {
      control: { type: "text" },
      description: "이미지 테두리",
    },
    size: {
      control: { type: "select" },
      description: "이미지 사이즈",
    },
  },
} as Meta<typeof Image>;

const Template: Story<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/7624/production/_104444203_d03fb5eb-685c-42c3-8fa2-eea0ee2dac26.jpg.webp",
  alt: "2018년 코미디 사진 수상작",
};
