import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { BarChart } from "@kac-monorepo/components/src/component";

export default {
  title: "Components/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  argTypes: {
    labels: {
      control: { type: "object" },
      description: "막대 차트의 라벨 (각 데이터 항목의 이름)",
    },
    datasets: {
      control: { type: "object" },
      description: "여러 데이터 세트를 포함한 배열",
    },
    options: {
      control: { type: "object" },
      description: "Chart.js 옵션을 커스터마이징",
    },
  },
} as Meta;

const Template: Story = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
  datasets: [
    {
      label: "유저1",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

export const CustomBarCart = Template.bind({});
CustomBarCart.args = {
  labels: ["1월", "2월", "3월", "4월"],
  datasets: [
    {
      label: "유저1",
      data: [65, 59, 80, 81],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "유저2",
      data: [28, 48, 40, 19],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
  options: {
    plugins: {
      legend: {
        position: "하단",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
        },
      },
      x: {
        title: {
          display: true,
          text: "제목",
        },
      },
    },
  },
};
