// Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ timeseriesData }) => {
  const chartData = {
    labels: timeseriesData.map((data) => data.timestamp),
    datasets: [
      {
        label: 'Value',
        data: timeseriesData.map((data) => data.value),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Chart;