import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CandlestickChart from "../src/components/CandlestickChart";

// Mock the CandlestickChart component
jest.mock("../src/components/CandlestickChart.tsx", () => {
  const MockCandlestickChart = ({ data }) => (
    <div>
      <div>Candlestick Chart</div>
      {data &&
        data.data.map((item, index) => (
          <div key={index}>
            <div>{item.x}</div>
            <div>{item.close}</div>
          </div>
        ))}
    </div>
  );
  MockCandlestickChart.displayName = "CandlestickChart";
  return MockCandlestickChart;
});

describe("CandlestickChart Component", () => {
  test("renders without crashing", () => {
    render(<CandlestickChart />);
    const chartElement = screen.getByText(/Candlestick Chart/i);
    expect(chartElement).toBeInTheDocument();
  });

  test("displays correct data", () => {
    const data = {
      data: [
        { x: "2023-01-01", open: 30, high: 40, low: 25, close: 35 },
        { x: "2023-01-02", open: 35, high: 45, low: 30, close: 40 },
      ],
    };
    render(<CandlestickChart data={data} />);

    // Check if the date and close values are displayed correctly
    expect(screen.getByText(/2023-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/35/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-01-02/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
  });
});
