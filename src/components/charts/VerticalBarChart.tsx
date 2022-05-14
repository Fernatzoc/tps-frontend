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
import { FC } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  info: any[];
  color: string;
  name: string;
  text: string;
}

export const VerticalBarChart: FC<Props> = ({ info, color, name, text }) => {
  const lab = info.map((item) => item.nombre);
  const value = info.map((item) => item.productos);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: text,
      },
    },
  };

  const data = {
    labels: lab,
    datasets: [
      {
        label: name,
        data: value,
        backgroundColor: `rgba(${color})`,
      },
    ],
  };

  return (
    <Card>
      <Bar options={options} data={data} />
    </Card>
  );
};
