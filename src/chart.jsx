import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const CustomChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 140],
        fill: false,
        borderColor: '#4B5563', // Gray-700
        backgroundColor: '#10B981', // Emerald-500
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4B5563', // Gray-700
        },
      },
      tooltip: {
        backgroundColor: '#10B981', // Emerald-500
        titleColor: '#FFFFFF', // White
        bodyColor: '#FFFFFF', // White
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // Gray-500
        },
      },
      y: {
        grid: {
          color: '#D1D5DB', // Gray-300
        },
        ticks: {
          color: '#6B7280', // Gray-500
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Sales Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomChart;
