'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ChartData} from '../types';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          labels: string[]; // Assuming your API returns labels as an array of strings
          data: number[];  // Assuming your API returns data as an array of numbers
        }>('http://127.0.0.1:8000/api/bar-chart-data/');
        
        setChartData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Bar Chart',
              data: response.data.data,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-4" style={{ height: '300px', width: '100%' }}>
      <Bar 
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
