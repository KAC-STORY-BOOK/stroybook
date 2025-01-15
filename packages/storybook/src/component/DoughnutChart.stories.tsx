import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { DoughnutChart } from "@kac-monorepo/components/src/component";

export default {
  title: "Components/DoughnutChart",
  component: DoughnutChart,
  tags: ["autodocs"],
  argTypes: {
    labels: {
      control: { type: "object" },
      description: "도넛 차트의 라벨 (각 데이터 항목의 이름)",
    },
    data: {
      control: { type: "object" },
      description: "도넛 차트의 데이터 값",
    },
    backgroundColors: {
      control: { type: "object" },
      description: "데이터 항목의 배경 색상",
    },
    borderColors: {
      control: { type: "object" },
      description: "데이터 항목의 경계선 색상",
    },
    borderWidth: {
      description: "데이터 항목의 경계선 두께",
    },
  },
} as Meta;

const Template: Story = (args) => <DoughnutChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: ["빨강", "파랑", "노랑", "초록", "보라", "주황"],
  data: [12, 19, 3, 5, 2, 3],
  backgroundColors: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColors: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  borderWidth: 2,
};

export const CustomDoughnutCart = Template.bind({});
CustomDoughnutCart.args = {
  labels: ["사과", "바나나", "체리"],
  data: [10, 15, 20],
  backgroundColors: [
    "rgba(255, 0, 0, 0.2)",
    "rgba(255, 255, 0, 0.2)",
    "rgba(0, 255, 0, 0.2)",
  ],
  borderColors: [
    "rgba(255, 0, 0, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(0, 255, 0, 1)",
  ],
  borderWidth: 1,
};
