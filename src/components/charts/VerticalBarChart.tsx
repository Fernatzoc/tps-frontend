import { Card } from "@mui/material";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Compras y ventas",
    },
  },
};

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [2, 5, 3, 5, 5, 4, 6, 2, 9];

export const data = {
  labels,
  datasets: [
    {
      label: "Compras",
      data: scores,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Ventas",
      data: scores2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const VerticalBarChart = () => {
  return (
    <Card>
      <Bar options={options} data={data} />;
    </Card>
  );
};
