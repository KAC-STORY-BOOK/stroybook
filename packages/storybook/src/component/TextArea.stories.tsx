import React from "react";
import { TextArea } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";

export default {
  title: "Components/Textarea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    errorMessage: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} as Meta<typeof TextArea>;

const Template: Story<typeof TextArea> = (args: any) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  errorMessage: false,
  placeholder: "작성 해 주세요...",
};

export const Size = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <TextArea size="small">Primary</TextArea>
    <TextArea size="medium">Secondary</TextArea>
    <TextArea size="large">Danger</TextArea>
  </div>
);

export const WithError = Template.bind({});
WithError.args = {
  size: "medium",
  errorMessage: true,
  placeholder: "에러 타입...",
};
