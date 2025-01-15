import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Chart.js에 필요한 요소 등록
ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface Dataset {
  label: string; // 데이터 세트의 이름
  data: number[]; // 데이터 값
  backgroundColor?: string; // 막대의 배경 색상
  borderColor?: string; // 막대의 경계선 색상
  borderWidth?: number; // 경계선 두께
}

export interface BarChartProps {
  labels?: string[]; // X축 라벨
  datasets?: Dataset[]; // 여러 개의 데이터 세트
  options?: object; // 사용자 정의 Chart.js 옵션
}

const getChartData = (labels: string[] = [], datasets: Dataset[] = []) => ({
  labels,
  datasets: datasets.map((dataset) => ({
    label: dataset.label,
    data: dataset.data,
    backgroundColor: dataset.backgroundColor || "rgba(75, 192, 192, 0.2)",
    borderColor: dataset.borderColor || "rgba(75, 192, 192, 1)",
    borderWidth: dataset.borderWidth || 1,
  })),
});

const getDefaultOptions = () => ({
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
        text: "X-Axis",
      },
    },
    y: {
      title: {
        display: true,
        text: "Y-Axis",
      },
      beginAtZero: true,
    },
  },
});

const BarChart: React.FC<BarChartProps> = ({
  labels = [],
  datasets = [],
  options,
}) => {
  const chartData = getChartData(labels, datasets);

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
