import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: " Input",
      data: labels.map(() => Math.floor(Math.random() * (1000 - 10)) + 10),
      backgroundColor: "#FF6B6B",
    },
    {
      label: "Output",
      data: labels.map(() => Math.floor(Math.random() * (1000 - 10)) + 10),
      backgroundColor: "#000080",
    },
  ],
};
const BarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
