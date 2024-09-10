'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import 'chartjs-chart-financial';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { CandlestickChartData, ChartData, BarChartDataset } from '../types';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const CandlestickChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CandlestickChartData>('http://127.0.0.1:8000/api/candlestick-data/');
        const data = response.data.data;

        setChartData({
          labels: data.map((entry) => entry.x),
          datasets: [
            {
              label: 'Candle Stick',
              data: data.map((entry) => entry.close),
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            } as BarChartDataset,
          ],
        });
      } catch (error) {
        console.error('Error fetching candlestick chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full p-4 bg-white shadow-lg rounded-lg">
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

export default CandlestickChart;
