import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

// Chart.js에 필요한 요소 등록
ChartJS.register(
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
);

interface Dataset {
  label: string; // 데이터 세트의 이름
  data: number[]; // 데이터 값
  backgroundColor?: string; // 배경 색상
  borderColor?: string; // 경계선 색상
  borderWidth?: number; // 경계선 두께
}

interface LineChartProps {
  labels?: string[]; // X축 라벨
  datasets?: Dataset[]; // 여러 개의 데이터 세트
}

const getChartData = (labels: string[] = [], datasets: Dataset[] = []) => ({
  labels,
  datasets: datasets.map((dataset) => ({
    label: dataset.label,
    data: dataset.data,
    backgroundColor: dataset.backgroundColor || "rgba(75, 192, 192, 0.2)",
    borderColor: dataset.borderColor || "rgba(75, 192, 192, 1)",
    borderWidth: dataset.borderWidth || 2,
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
      },
    },
    y: {
      title: {
        display: true,
      },
      beginAtZero: true,
    },
  },
});

const LineChart: React.FC<LineChartProps> = ({
  labels = [],
  datasets = [],
}) => {
  const chartData = getChartData(labels, datasets);
  const options = getDefaultOptions();

  return <Line data={chartData} options={options} />;
};

export default LineChart;
