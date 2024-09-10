import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../src/app/page.tsx";

// Mock chart components with display names to avoid ESLint warning
jest.mock("../src/components/BarChart.tsx", () => {
  const MockBarChart = () => <div>Bar Chart</div>;
  MockBarChart.displayName = "BarChart";
  return MockBarChart;
});

jest.mock("../src/components/LineChart.tsx", () => {
  const MockLineChart = () => <div>Line Chart</div>;
  MockLineChart.displayName = "LineChart";
  return MockLineChart;
});

jest.mock("../src/components/CandlestickChart.tsx", () => {
  const MockCandlestickChart = () => <div>Candlestick Chart</div>;
  MockCandlestickChart.displayName = "CandlestickChart";
  return MockCandlestickChart;
});

jest.mock("../src/components/PieChart.tsx", () => {
  const MockPieChart = () => <div>Pie Chart</div>;
  MockPieChart.displayName = "PieChart";
  return MockPieChart;
});

describe("Dashboard Component", () => {
  test("renders without crashing", () => {
    render(<Dashboard />);
    // Check if the dashboard header text is present
    const dashboardElement = screen.getByText(/Dashboard/i);
    expect(dashboardElement).toBeInTheDocument();
  });

  test("displays all charts", () => {
    render(<Dashboard />);
    // Check for the presence of each chart's mock content
    expect(screen.getByText(/Line Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Candlestick Chart/i)).toBeInTheDocument();
    expect(screen.getByText(/Pie Chart/i)).toBeInTheDocument();
  });
});
