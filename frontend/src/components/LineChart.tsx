'use client';

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { ChartData } from '../types';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ labels: string[]; data: number[] }>('http://127.0.0.1:8000/api/line-chart-data/');
        setChartData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Line Chart',
              data: response.data.data,
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching line chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full p-4 bg-white shadow-lg rounded-lg">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default LineChart;
