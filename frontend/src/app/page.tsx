import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import CandlestickChart from "../components/CandlestickChart";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  return (
    <div className="text-center">
      {/* Header */}
      <header className="mb-8 text-center mt-4">
        <h4 className="text-3xl font-bold mb-1">Dashboard(Django/Next)</h4>
        <p className="text-lg text-gray-600">
          An overview of key metrics and charts
        </p>
      </header>
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-6xl mx-auto p-2 mt-2">
        <div className="p-2 rounded-lg h-64">
          <CandlestickChart />
        </div>

        <div className="p-2 rounded-lg h-64">
          <LineChart />
        </div>

        <div className="p-2 rounded-lg h-64">
          <BarChart />
        </div>

        <div className="p-2 rounded-lg h-64">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
