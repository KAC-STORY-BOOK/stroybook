import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

// Chart.js/auto가 필요할 경우 추가 설정
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  labels?: string[];
  data?: number[];
  backgroundColors?: string[];
  borderColors?: string[];
  borderWidth?: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  data,
  backgroundColors,
  borderColors,
  borderWidth,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth,
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default DoughnutChart;
