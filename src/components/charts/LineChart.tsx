import { Card } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = () => {
  const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
  const labels = [100, 200, 300, 400, 500, 600, 700];

  const options = {
    responsive: true,
  };

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
        },
      ],
      labels,
    };
  }, []);

  return (
    <Card>
      <Line data={data} options={options} />;
    </Card>
  );
};
