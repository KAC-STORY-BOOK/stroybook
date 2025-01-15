import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { LineChart } from "@kac-monorepo/components/src/component";
import { LineChartProps } from "@kac-monorepo/components/src/component/Cart/LineCart";

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
    options: {
      control: { type: "object" },
      description: "Chart.js 옵션을 커스터마이징",
    },
  },
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

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
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "월",
        },
      },
      y: {
        title: {
          display: true,
        },
        beginAtZero: true,
      },
    },
  },
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
