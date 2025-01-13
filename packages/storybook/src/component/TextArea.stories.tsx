import React from "react";
import { TextArea } from "@kac-monorepo/components/src/designSystem/index";
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
    <TextArea size="small">small</TextArea>
    <TextArea size="medium">medium</TextArea>
    <TextArea size="large">large</TextArea>
  </div>
);

export const WithError = Template.bind({});
WithError.args = {
  size: "medium",
  errorMessage: true,
  placeholder: "에러 타입...",
};
