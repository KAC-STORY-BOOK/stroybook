import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { LineChart } from "@kac-monorepo/components/src/component";

export default {
  title: "Components/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  argTypes: {
    labels: {
      control: { type: "object" },
      description: "라인 차트의 라벨 (각 데이터 항목의 이름)",
    },
    datasets: {
      control: { type: "object" },
      description: "여러 데이터 세트를 포함한 배열",
    },
  },
} as Meta;

const Template: Story = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
  datasets: [
    {
      label: "유저1",
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
  ],
};

export const CustomLineCart = Template.bind({});
CustomLineCart.args = {
  labels: ["1월", "2월", "3월", "4월"],
  datasets: [
    {
      label: "유저1",
      data: [65, 59, 80, 81],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
    {
      label: "유저2",
      data: [28, 48, 40, 19],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderWidth: 2,
    },
  ],
};
